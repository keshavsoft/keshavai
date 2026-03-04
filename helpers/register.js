function register(context, vscode, name, handler) {
    context.subscriptions.push(
        vscode.commands.registerCommand(name, handler)
    );
}

module.exports = register;