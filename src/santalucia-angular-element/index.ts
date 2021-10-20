import {
  Rule,
  SchematicContext,
  Tree,
  externalSchematic,
  apply,
  url,
  template,
  chain,
  mergeWith,
  MergeStrategy,
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function santaluciaAngularElement(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url("./files"), [
      template({ ..._options, ...strings }),
    ]);
    const merged = mergeWith(templateSource, MergeStrategy.Overwrite);

    const rule = chain([generateRepo(name), merged]);

    return rule(tree, _context) as Rule;
  };
}

function generateRepo(name: string): Rule {
  return externalSchematic("@schematics/angular", "ng-new", {
    name,
    version: "9.0.0",
    directory: name,
    routing: false,
    style: "scss",
    inlineStyle: false,
    inlineTemplate: false,
  });
}
