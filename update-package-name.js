const fs = require('fs');

const packageJson = require('./package.json');

const newName = process.env.PACKAGE_NAME;

if (!newName) {
  console.error('Error: PACKAGE_NAME environment variable is not set.');
  process.exit(1);
}

packageJson.name = newName;

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log(`Package name set to ${newName}`);
