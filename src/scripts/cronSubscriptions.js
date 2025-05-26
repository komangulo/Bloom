import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path';

// Ejecutar cada día a la medianoche
cron.schedule('0 0 * * *', () => {
  console.log('Running subscription sync...');
  
  const scriptPath = path.join(__dirname, 'manageSubscriptions.js');
  
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return;
    }
    
    console.log(`Script output:\n${stdout}`);
    
    if (stderr) {
      console.error(`Script errors:\n${stderr}`);
    }
  });
}); 