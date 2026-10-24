const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Lenovo\\Documents\\css founder\\hotel & resort';

// ─── Check which top-level data.json keys are used ──────────────────────────
const dataJsonPath = path.join(projectRoot, 'data', 'data.json');
const raw = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));
const topLevelKeys = Object.keys(raw);

// Source files to scan (exclude data.json itself, node_modules, .next)
const srcExts = ['.tsx', '.ts', '.css'];
function getAllSrcFiles(dir) {
  const results = [];
  if (dir.includes('node_modules') || dir.includes('.next') || dir.includes('scripts')) return results;
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

const srcFiles = getAllSrcFiles(projectRoot);
const allSourceContent = srcFiles.map(f => {
  try { return fs.readFileSync(f, 'utf8'); } catch(e) { return ''; }
}).join('\n');

// Also look at data.ts for raw.xxx references
const dataTsContent = fs.readFileSync(path.join(projectRoot, 'data', 'data.ts'), 'utf8');
const allContent = allSourceContent + dataTsContent;

console.log('\n=== TOP-LEVEL data.json KEY AUDIT ===\n');
for (const key of topLevelKeys) {
  // Check if raw.key is used in data.ts, or content.key, or similar
  const usedInDataTs = dataTsContent.includes(`raw.${key}`) || dataTsContent.includes(`(raw as any).${key}`);
  const usedInSrc = allSourceContent.includes(key);
  const status = usedInDataTs ? 'USED (data.ts exports it)' : (usedInSrc ? 'REFERENCED in source' : 'POTENTIALLY UNUSED');
  console.log(`  ${status.padEnd(35)} raw.${key}`);
}

// ─── Check for unused project-level files ───────────────────────────────────
console.log('\n=== PROJECT FILES AUDIT ===\n');
const projectFiles = getAllSrcFiles(projectRoot);
console.log('All source files:');
projectFiles.forEach(f => console.log(' ', path.relative(projectRoot, f)));

// ─── Check content sub-keys ──────────────────────────────────────────────────
console.log('\n=== content.* SUB-KEYS AUDIT ===\n');
if (raw.content) {
  for (const subKey of Object.keys(raw.content)) {
    const used = allContent.includes(`content.${subKey}`) || allContent.includes(`${subKey}Content`);
    console.log(`  ${used ? 'USED' : 'UNUSED'}: content.${subKey}`);
  }
}
