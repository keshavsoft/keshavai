const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function rootCommand(uri) {
    // The code you place here will be executed every time your command is executed
    const LocalPath = path.join(uri.fsPath, "file1.txt");
    fs.writeFileSync(LocalPath, "hai");
    // Display a message box to the user
    vscode.window.showInformationMessage(uri.fsPath);
};

module.exports = rootCommand;
