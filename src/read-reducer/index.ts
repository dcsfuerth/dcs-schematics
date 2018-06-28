import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move,
  chain,
  mergeWith,
  branchAndMerge,
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function readReducer(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (!options || !options.name) {
      throw new Error('Option "name" is necessary!');
    }

    const source = apply(url('./files'), [
      template({
        ...strings,
        name: options.name,
      }),
      move(options.path || `src/app/reducers/${strings.dasherize(options.name)}`),
    ]);

    return chain([branchAndMerge(chain([mergeWith(source)]))])(tree, context);
  };
}
