import * as vscode from "vscode";
import * as cp from 'child_process';

export class GiraphViewProvider implements vscode.WebviewViewProvider {
    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        token: vscode.CancellationToken
    ): void | Thenable<void> {
        webviewView.webview.options = {
            enableScripts: true,
            //   localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
        };

        let gitVersion = '';

        cp.spawn('git', ['--version'])
            .on('exit', (code) => {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Git not found. Please install Git and try again.');
                } else {
                    webviewView.webview.html = `<!DOCTYPE html>
                                                <html lang="en">
                                                <head>
                                                    <meta charset="UTF-8">
                                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                                    <title>Giraph Graph</title>
                                                </head>
                                                <body>
                                                    <h1>Hello World!</h1>
                                                    <p>Git Version: ${gitVersion}</p>
                                                </body>
                                                </html>
                                                `;
                }
            })
            .stdout.on('data', (data) => {
                gitVersion += data.toString().trim();
            });
    }
}