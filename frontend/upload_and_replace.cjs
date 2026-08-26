const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const CLOUD_NAME = 'nmv4tzev';
const API_KEY = '483133336425535';
const API_SECRET = 'SDVWTN0vvWL5-b6WBC6nI5xnDOI';

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

const PUBLIC_DIR = path.join(__dirname, 'public');

async function getFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(await getFiles(file, exts));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        results.push(file);
      }
    }
  }
  return results;
}

function uploadLargePromise(file, options) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_large(file, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

async function uploadFiles() {
  const exts = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.mp4', '.mov'];
  const files = await getFiles(PUBLIC_DIR, exts);
  
  let mapping = {};
  if (fs.existsSync('cloudinary_mapping.json')) {
    mapping = JSON.parse(fs.readFileSync('cloudinary_mapping.json', 'utf-8'));
  }
  
  for (let file of files) {
    const ext = path.extname(file).toLowerCase();
    const isVideo = ['.mp4', '.mov'].includes(ext);
    
    const relPath = file.replace(PUBLIC_DIR, ''); 
    const posixPath = relPath.split(path.sep).join('/');
    
    // Skip if already uploaded successfully in previous run
    if (mapping[posixPath] && !mapping[posixPath].includes('undefined')) {
      continue;
    }
    
    console.log(`Uploading ${posixPath}...`);
    try {
      let res;
      if (isVideo) {
        res = await uploadLargePromise(file, { resource_type: "video" });
      } else {
        res = await cloudinary.uploader.upload(file, { resource_type: "auto" });
      }
      mapping[posixPath] = res.secure_url;
      console.log(` -> ${res.secure_url}`);
      
      // Save periodically
      fs.writeFileSync('cloudinary_mapping.json', JSON.stringify(mapping, null, 2));
    } catch (e) {
      console.error(`Failed to upload ${posixPath}:`, e.message || e);
    }
  }
  
  fs.writeFileSync('cloudinary_mapping.json', JSON.stringify(mapping, null, 2));
  console.log("Mapping saved to cloudinary_mapping.json");
}

uploadFiles();
