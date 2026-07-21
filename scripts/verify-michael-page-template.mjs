import fs from 'node:fs';
import path from 'node:path';

const requestedRoot = path.resolve(process.argv[2] ?? process.cwd());
const frameworkRoot = path.join(requestedRoot, 'apps', 'demo');
const projectRoot = fs.existsSync(path.join(frameworkRoot, 'themes'))
  ? frameworkRoot
  : requestedRoot;
const requiredFiles = {
  theme: path.join(projectRoot, 'themes', 'michael-page-bilingual.md'),
  demo: path.join(projectRoot, 'themes', 'michael-page-bilingual.demo.tsx'),
  logo: path.join(projectRoot, 'assets', 'logos', 'michael-page-logo.jpg'),
  starter: path.join(projectRoot, 'slides', 'michael-page-template', 'index.tsx'),
};

const failures = [];
for (const [label, file] of Object.entries(requiredFiles)) {
  if (!fs.existsSync(file)) failures.push(`${label} missing: ${file}`);
}

if (failures.length === 0) {
  const theme = fs.readFileSync(requiredFiles.theme, 'utf8').toLowerCase();
  const demo = fs.readFileSync(requiredFiles.demo, 'utf8').toLowerCase();
  const starter = fs.readFileSync(requiredFiles.starter, 'utf8').toLowerCase();
  const currentSignals = ['#22174e', '#6864ff', 'aptos display', 'aptos'];

  for (const signal of currentSignals) {
    if (!theme.includes(signal)) failures.push(`theme missing current brand signal: ${signal}`);
    if (!demo.includes(signal))
      failures.push(`theme preview missing current brand signal: ${signal}`);
  }
  if (theme.includes('#0055a1') || demo.includes('#0055a1') || starter.includes('#0055a1')) {
    failures.push('retired Michael Page blue #0055A1 is still present');
  }
  if (!/theme\s*:\s*['"]michael-page-bilingual['"]/.test(starter)) {
    failures.push("starter deck must set theme: 'michael-page-bilingual'");
  }
  if (fs.statSync(requiredFiles.logo).size < 10000)
    failures.push('logo asset is unexpectedly small');
}

if (failures.length > 0) {
  console.error('Michael Page template verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Michael Page template verified at ${projectRoot}`);
console.log("Theme selection: theme: 'michael-page-bilingual'");
