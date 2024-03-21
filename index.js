// import express from 'express';
// import { createFileAndWriteToFile, getFilesInFolder } from './files.js';
// import path from 'path';

// const app = express();
// const folderPath = path.join(_dirname, './files');

// app.get('/create', (req, res) => {
//     createFileAndWriteToFile();
//     res.send('File created successfully');
// });
// app.get('/files', async (req, res) => {
//     try {
//       const files = await getFilesInFolder(folderPath);
//       res.json(files);
//     } catch (err) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });

// const port = 3000;
// app.listen(port, () => {
//     console.log(Server running on port: http://localhost:${port});
// });

import express from 'express';
import { createFileAndWriteToFile, getFilesInFolder } from './filesystem.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const folderPath = path.join(_dirname, './files');

app.get('/create', (req, res) => {
    createFileAndWriteToFile();
    res.send('File created successfully');
});

app.get('/files', async (req, res) => {
    try {
      const files = await getFilesInFolder(folderPath);
      res.json(files);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});