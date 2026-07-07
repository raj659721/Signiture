import fs from 'fs';
import path from 'path';

const files = [
  'index.html',
  'utils/translations.ts',
  'package.json',
  'package-lock.json',
  'metadata.json'
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace text
    content = content.replace(/KoreSignature/g, 'SignatureBuilder');
    content = content.replace(/Kore Agency/g, 'My Company');
    content = content.replace(/koresignature/g, 'signaturebuilder');
    content = content.replace(/koreagency/g, 'mycompany');
    
    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
console.log('All branding removed successfully!');
