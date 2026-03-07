import * as vscode from 'vscode'
import { register } from './Helpers/register.js';
import { startFunc as rootCommand } from './Commands/rootCommand.js';
import { startFunc as folderCommand } from './Commands/folderCommand.js';
import { startFunc as fileCommand } from './Commands/fileCommand.js';
import { StartFunc as VoiceToText } from "./Commands/VoiceToText/commandStart.js";
import { startFunc as showHtml } from './Commands/showHtml.js';
import { startFunc as FetchCommands } from './Commands/Fetch/entryFile.js';

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

	FetchCommands(context, vscode);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"voice",
			() => VoiceToText(context)
		)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"keshavai.showHtml",
			() => showHtml(context)
		)
	);
};

// This method is called when your extension is deactivated
function deactivate() { }

export { activate, deactivate }