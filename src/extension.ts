// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Giraph extension is now active!');

	let disposable = vscode.commands.registerCommand('giraph.helloWorld', () => {
		const panel = vscode.window.createWebviewPanel(
			'giraph.graphview',
			'Giraph Graph',
			vscode.ViewColumn.One,
			{
			enableScripts: true
			}
		);
	
		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Giraph Graph</title>
			</head>
			<body>
				<h1>Hello World!</h1>
			</body>
			</html>
`;
}
// This method is called when your extension is deactivated
export function deactivate() {}
