const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Lenovo\\Documents\\css founder\\hotel & resort';
const imagesDir = path.join(projectRoot, 'public', 'images');
const dataJsonPath = path.join(projectRoot, 'data', 'data.json');

// Get all image filenames (without extension)
const imageFiles = fs.readdirSync(imagesDir).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.svg'));

// Search across all source files (.tsx, .ts, .css, .json) for each image
const srcExts = ['.tsx', '.ts', '.css', '.json'];
function getAllSrcFiles(dir) {
  const results = [];
  if (dir.includes('node_modules') || dir.includes('.next')) return results;
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) results.push(...getAllSrcFiles(full));
      else if (srcExts.some(ext => item.name.endsWith(ext))) results.push(full);
    }
  } catch (e) {}
  return results;
}

const srcFiles = getAllSrcFiles(projectRoot).filter(f => !f.includes('node_modules') && !f.includes('.next'));
const allSourceContent = srcFiles.map(f => {
  try { return fs.readFileSync(f, 'utf8'); } catch(e) { return ''; }
}).join('\n');

console.log(`\nChecking ${imageFiles.length} images across ${srcFiles.length} source files...\n`);

const unused = [];
const used = [];
for (const img of imageFiles) {
  const basename = img.replace(/\.[^.]+$/, ''); // without extension
  if (allSourceContent.includes(img) || allSourceContent.includes(basename)) {
    used.push(img);
  } else {
    unused.push(img);
  }
}

console.log('=== UNUSED IMAGES ===');
unused.forEach(i => console.log(' -', i));
console.log(`\nTotal unused: ${unused.length} / ${imageFiles.length}`);
console.log('\n=== USED IMAGES ===');
used.forEach(i => console.log(' +', i));
