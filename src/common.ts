import * as vscode from "vscode";

export const getActiveText = (): string | undefined => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return undefined;
  }

  const { document, selection } = editor;
  return document.getText(selection);
};

export const getCommonString = (str1: string, str2: string) => {
  let common = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      common += str1[i];
    } else {
      break;
    }
  }
  return common;
};
