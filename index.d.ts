// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for function modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('[~THE MODULE~]');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from '[~THE MODULE~]';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = GameInputs;

declare function GameInputs(domElement: HTMLElement): GameInputs.Inputs;
declare function GameInputs(
  domElement: HTMLElement,
  options: {
    preventDefaults?: boolean;
    stopPropagation?: boolean;
    allowContextMenu?: boolean;
    disabled?: boolean;
  }
): GameInputs.Inputs;

declare namespace GameInputs {
  export interface Inputs {
    bind: (name: string, ...keys: string[]) => void;
    unbind: (name: string) => void;
    state: {
      [name: string]: any;
      dx: number;
      dy: number;
      scrollx: number;
      scrolly: number;
      scrollz: number;
    };
    tick: () => void;
  }
}
