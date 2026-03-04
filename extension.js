// const vscode = require('vscode');
// const vscode = require('vscode');
import * as vscode from 'vscode'
import { register } from './Helpers/register.js';
import { startFunc as rootCommand } from './Commands/rootCommand.js';
import { startFunc as folderCommand } from './Commands/folderCommand.js';
import { startFunc as fileCommand } from './Commands/fileCommand.js';
// import { StartFunc as VoiceToText } from "./Commands/VoiceToText.js";
import { StartFunc as VoiceToText } from "./Commands/VoiceToText/commandStart.js";
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "keshavai" is now active!');

	const disposable = vscode.commands.registerCommand('keshavai.helloWorld', function () {
		vscode.window.showInformationMessage("aaaaaaaaaaa");
	});

	context.subscriptions.push(disposable);

	register(context, vscode, 'keshavai.rightClickRoot', rootCommand)
	register(context, vscode, 'keshavai.rightClickFolder', folderCommand);
	register(context, vscode, 'keshavai.rightClickFile', fileCommand);
	// register(context, vscode, 'voice', VoiceToText);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"voice",
			() => VoiceToText(context)
		)
	);
};

// This method is called when your extension is deactivated
function deactivate() { }

// module.exports = {
// 	activate,
// 	deactivate
// }
export { activate, deactivate }