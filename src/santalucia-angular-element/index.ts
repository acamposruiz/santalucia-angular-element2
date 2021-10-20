import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function santaluciaAngularElement(_options: any): Rule {
  const name = _options.name;
  console.log("The name of the repo will be", name);
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
