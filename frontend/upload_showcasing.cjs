const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: 'nmv4tzev',
  api_key: '483133336425535',
  api_secret: 'SDVWTN0vvWL5-b6WBC6nI5xnDOI'
});

async function run() {
  console.log("Uploading showcasing_films_small.mp4...");
  try {
    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_large('public/showcasing_films_small.mp4', { resource_type: "video" }, (err, res) => {
        if (err) reject(err); else resolve(res);
      });
    });
    
    const url = res.secure_url;
    console.log("Uploaded successfully:", url);
    
    // Add optimization tags
    const optimizedUrl = url.replace('/video/upload/v', '/video/upload/f_auto,q_auto/v');
    
    const indexFile = 'src/pages/index.jsx';
    let content = fs.readFileSync(indexFile, 'utf-8');
    content = content.replace(/\/showcasing_films\.mp4/g, optimizedUrl);
    fs.writeFileSync(indexFile, content, 'utf-8');
    
    console.log("Updated index.jsx with new video URL!");
    
    // Cleanup local files
    fs.unlinkSync('public/showcasing_films.mp4');
    fs.unlinkSync('public/showcasing_films_small.mp4');
    console.log("Deleted local video files.");
  } catch (e) {
    console.error("Upload failed:", e);
  }
}
run();
