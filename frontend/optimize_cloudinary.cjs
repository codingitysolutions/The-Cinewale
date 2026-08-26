const fs = require('fs');
const path = require('path');

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
    
    // Check if not already optimized
    // Replace /image/upload/v... with /image/upload/f_auto,q_auto/v...
    content = content.split('res.cloudinary.com/nmv4tzev/image/upload/v').join('res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v');
    content = content.split('res.cloudinary.com/nmv4tzev/video/upload/v').join('res.cloudinary.com/nmv4tzev/video/upload/f_auto,q_auto/v');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Optimized ${file}`);
    }
  }
}
run();
