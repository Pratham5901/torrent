// server.mjs
import express from 'express';
import WebTorrent from 'webtorrent';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const client = new WebTorrent();

app.use(express.static('public'));
app.use(express.json());

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
