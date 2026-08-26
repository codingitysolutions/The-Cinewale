const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('cloudinary_mapping.json', 'utf-8'));

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

async function run() {
  const exts = ['.jsx', '.js', '.css', '.html'];
  const dirs = [path.join(__dirname, 'src'), path.join(__dirname, 'public')];
  
  let files = [];
  for (let d of dirs) {
    if (fs.existsSync(d)) {
      files = files.concat(await getFiles(d, exts));
    }
  }
  files.push(path.join(__dirname, 'index.html'));
  
  for (let file of files) {
    if (!fs.existsSync(file)) continue;
    
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;
    
    for (let [relPath, url] of Object.entries(mapping)) {
      // replace exact relative paths
      content = content.split(relPath).join(url);
      
      // replace paths missing the leading slash (e.g. 'images/abc.jpg')
      const noSlash = relPath.startsWith('/') ? relPath.substring(1) : relPath;
      if (noSlash) {
         // only replace if it's quoted or inside url() to avoid replacing partial words
         content = content.split(`"${noSlash}"`).join(`"${url}"`);
         content = content.split(`'${noSlash}'`).join(`'${url}'`);
         content = content.split(`url(${noSlash})`).join(`url(${url})`);
         content = content.split(`url("${noSlash}")`).join(`url("${url}")`);
         content = content.split(`url('${noSlash}')`).join(`url('${url}')`);
      }
    }
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  }
  console.log("Replacement complete!");
}

run();
