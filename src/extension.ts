import * as vscode from "vscode";
import { getActiveText } from "./common";
import { SEARCH_FILENAME_COMMANDS } from "./SearchFilenameCommands";
import { changeCaseSearchCommands } from "./ChangeCaseAndSearchCommands";

const textCount = () => {
  let count = 0;
  const text = getActiveText();
  if (text) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    count = [...segmenter.segment(text)].length;
  }

  vscode.window.showInformationMessage(`length: ${count}`);
};

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vscode-search-files" is now active!');

  const disposables = [
    vscode.commands.registerCommand("vscode-search-files.textCount", textCount),
    vscode.commands.registerCommand("vscode-search-files.rubyModule", SEARCH_FILENAME_COMMANDS.rubyModule),
    vscode.commands.registerCommand("vscode-search-files.changeCaseSearch", changeCaseSearchCommands),
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() { }
