import * as vscode from "vscode";
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";
const pluralize = require('pluralize');
import { getActiveText, getCommonString } from "./common";

const singularForm = () => {
  const text = getActiveText() || "";
  return capitalCase(text).split(' ').map(word => pluralize.singular(word)).join('');
};
const pluralForm = () => {
  const text = getActiveText() || "";
  return capitalCase(text).split(' ').map(word => pluralize.plural(word)).join('');
};
const commonPluralSingularForm = () => {
  const text = getActiveText() || "";

  return capitalCase(text).split(' ').map((word) => {
    const single = pluralize.singular(word);
    const multi = pluralize.plural(word);
    return getCommonString(single, multi);
  }).join('');
};

export const COMMANDS = {
  camelCase: "camelCase",
  capitalCase: "capitalCase",
  constantCase: "constantCase",
  dotCase: "dotCase",
  headerCase: "headerCase",
  noCase: "noCase",
  paramCase: "paramCase",
  pascalCase: "pascalCase",
  pathCase: "pathCase",
  sentenceCase: "sentenceCase",
  snakeCase: "snakeCase",
  // kebabCase: 'kebabCase',
  // lowerCase: 'lowerCase',
  // lowerFirstCase: 'lowerFirstCase',
  // upperCase: 'upperCase',
  // upperFirstCase: 'upperFirstCase',
  singularForm: "singularForm",
  pluralForm: "pluralForm",
  commonPluralSingularForm: "commonPluralSingularForm",
};

const COMMAND_DEFINITIONS = [
  { label: COMMANDS.camelCase, description: "Search filename by camelCase", func: camelCase },
  { label: COMMANDS.capitalCase, description: "Search filename by capitalCase", func: capitalCase },
  { label: COMMANDS.constantCase, description: "Search filename by constantCase", func: constantCase },
  { label: COMMANDS.dotCase, description: "Search filename by dotCase", func: dotCase },
  { label: COMMANDS.headerCase, description: "Search filename by headerCase", func: headerCase },
  { label: COMMANDS.noCase, description: "Search filename by noCase", func: noCase },
  { label: COMMANDS.paramCase, description: "Search filename by paramCase", func: paramCase },
  { label: COMMANDS.pascalCase, description: "Search filename by pascalCase", func: pascalCase },
  { label: COMMANDS.pathCase, description: "Search filename by pathCase", func: pathCase },
  { label: COMMANDS.sentenceCase, description: "Search filename by sentenceCase", func: sentenceCase },
  { label: COMMANDS.snakeCase, description: "Search filename by snakeCase", func: snakeCase },
  { label: COMMANDS.singularForm, description: "Search filename by singularForm", func: singularForm },
  { label: COMMANDS.pluralForm, description: "Search filename by pluralForm", func: pluralForm },
  { label: COMMANDS.commonPluralSingularForm, description: "Search filename by commonPluralSingularForm", func: commonPluralSingularForm },
];

export const changeCaseSearchCommands = () => {
  const text = getActiveText() || "";

  const items: vscode.QuickPickItem[] = COMMAND_DEFINITIONS.map((c) => ({
    label: c.label,
    description: text ? `Search by "${c.func(text)}"` : c.description,
  }));

  vscode.window.showQuickPick(items).then((command) => {
    const func = COMMAND_DEFINITIONS.find((definition) => command?.label === definition.label)?.func;
    if (func && text) {
      vscode.commands.executeCommand("workbench.action.quickOpen", func(text));
    }
  });
};
