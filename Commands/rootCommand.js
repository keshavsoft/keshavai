const fs = require('fs');
const path = require('path');

function rootCommand(uri) {
    const LocalPath = path.join(uri.fsPath, "Folder1");
    fs.mkdirSync(LocalPath);
}

module.exports = rootCommand;