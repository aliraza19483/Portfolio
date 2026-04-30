const fs = require('fs');
const path = require('path');

const srcPaths = [
  'C:/Users/Lenovo/.gemini/antigravity/brain/cce570d2-0be0-4467-911c-a3efbb81ff10/media__1777457425976.jpg',
  'C:/Users/Lenovo/.gemini/antigravity/brain/cce570d2-0be0-4467-911c-a3efbb81ff10/media__1777457492968.png',
  'C:/Users/Lenovo/.gemini/antigravity/brain/cce570d2-0be0-4467-911c-a3efbb81ff10/ali_raza_profile_1777458115570.png'
];

const dest = path.join('d:/Project/Protfolio/public', 'ali-raza.jpg');

for (const src of srcPaths) {
  if (fs.existsSync(src)) {
    console.log(`Copying ${src} to ${dest}`);
    fs.copyFileSync(src, dest);
    break;
  }
}
