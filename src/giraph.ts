import * as vscode from "vscode";

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

        webviewView.webview.html = getWebviewContent();

        webviewView.webview.onDidReceiveMessage((message) => {
            if (message.command === "hello") {
                vscode.window.showInformationMessage("Hello from WebviewView!");
            }
        });
    }
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