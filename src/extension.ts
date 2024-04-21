import * as vscode from 'vscode';
import { GiraphViewProvider } from './giraph';

export function activate(context: vscode.ExtensionContext) {
	console.log('Giraph extension is now active!');

	const provider = new GiraphViewProvider();

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('giraph.graphview', provider));
}

export function deactivate() {}
