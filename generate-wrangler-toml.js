const fs = require('fs');

const template = fs.readFileSync('wrangler.template.toml', 'utf-8');

const packageName = process.env.PACKAGE_NAME;

if (!packageName) {
  console.error('Error: PACKAGE_NAME environment variable is not set.');
  process.exit(1);
}

const wranglerConfig = template.replace('$PACKAGE_NAME', packageName);

fs.writeFileSync('wrangler.toml', wranglerConfig);

console.log('Generated wrangler.toml with dynamic name.');
