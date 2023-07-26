import { tmpdir } from 'os';
import path, { join } from 'path';
import { readdirSync, unlinkSync, rmSync } from 'fs';

let handler = async (m, { conn, __dirname, args }) => {
  m.reply(`✅cleaned the system temp`);
  m.react(done);

  const tmp = [tmpdir(), join(__dirname, '../tmp')];
  const filename = [];

  tmp.forEach(dirname => {
    readdirSync(dirname).forEach(file => {
    
      if (!file.toLowerCase().endsWith('.log')) {
        filename.push(join(dirname, file));
      }
    });
  });

  
  filename.forEach(file => {
    try {
      
      rmSync(file, { recursive: true });
      console.log(`Deleted: ${file}`);
    } catch (error) {
      console.error(`Error while deleting ${file}:`, error);
      // Handle the error
      
    }
  });
};

handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^(cleartmp)$/i;
handler.rowner = true;

export default handler;

