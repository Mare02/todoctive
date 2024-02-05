const fs = require('fs');
const path = require('path');

const schemasDir = path.join(__dirname, '../../prisma/schemas');
const schemaFiles = fs.readdirSync(schemasDir)
  .filter(file => file.endsWith('.prisma'))
  .sort();

const fullSchema = schemaFiles.map(file => {
  const filePath = path.join(schemasDir, file);
  return fs.readFileSync(filePath, { encoding: 'utf-8' });
}).join('\n\n');

const outputPath = path.join(__dirname, '../../prisma', 'schema.prisma');
fs.writeFileSync(outputPath, fullSchema);