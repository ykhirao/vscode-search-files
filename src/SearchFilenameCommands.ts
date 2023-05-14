import * as vscode from "vscode";
import { EOL } from "os";
import { getActiveText } from "./common";

/**
 * Search for file names, removing module notation (::), etc.
 *
 * (ex. 1) Select single line.
 * `API:V1::Users`
 * → qiuckOpenFile: APIV1Users
 *
 * Search for file names by removing comments,
 * module notation (::), line breaks, etc.
 *
 * (ex. 2) Select multiple line.
 * ```ruby
 * module API
 *   # This is a old API
 *   module V2 # => APIV1
 *     class Users
 * ```
 * → qiuckOpenFile: APIV2Users
 */
const rubyModuleText = () => {
  const text = getActiveText() || '';
  const lines = text.split(EOL).map((line) => {
    return line.split("#")[0].split("<")[0].replace('module', '').replace('class', '').trim();
  }).filter(Boolean);

  return lines.join('').replaceAll('::', '');
};

export const SEARCH_FILENAME_COMMANDS = {
  rubyModule: () => vscode.commands.executeCommand('workbench.action.quickOpen', rubyModuleText()),
};
