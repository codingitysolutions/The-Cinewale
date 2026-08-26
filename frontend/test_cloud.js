const cloudinary = require('cloudinary').v2;

async function test(cloud_name) {
  cloudinary.config({
    cloud_name: cloud_name,
    api_key: '483133336425535',
    api_secret: 'SDVWTN0vvWL5-b6WBC6nI5xnDOI'
  });
  try {
    const res = await cloudinary.api.ping();
    console.log(`Success with ${cloud_name}`);
    return true;
  } catch (e) {
    console.log(`Failed with ${cloud_name}: ${e.message || e.error?.message || e}`);
    return false;
  }
}

async function run() {
  if (await test('the-cinewala')) return;
  if (await test('thecinewala')) return;
  if (await test('the-cinewale')) return;
  if (await test('thecinewale')) return;
}
run();
