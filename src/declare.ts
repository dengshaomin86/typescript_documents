// global.d.ts

/**
 * 1. 全局声明
 * 通过declare我们可以标注js全局变量的类型
 */
declare var n: number;
declare let s: string;
declare const o: object;
declare function f(s: string): number;
declare enum dir {
  top,
  right,
  bottom,
  left,
}

/**
 * 2. declare namespace
 * namespace代表后面的全局变量是一个对象
 */

declare namespace MyPlugin {
  var n: number;
  var s: string;
  var f: (s: string) => number;
}

MyPlugin.s.substr(0, 1);
MyPlugin.n.toFixed();
MyPlugin.f("文字").toFixed();

// 报错
// MyPlugin.s.toFixed();
// MyPlugin.n.substr(0, 1);
// MyPlugin.f(123);

/**
 * 3. 修改已存在的全局声明
 * 注意: 修改"全局声明"必须在模块内部, 所以至少要有 export{} 字样，不然会报错
 * 全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中
 */
declare global {
  interface String {
    // String 类型在 vscode 的语法提示下多了一个 hump 的方法,不过我们只是声明, 并没有用js实现, 所以运行会报错, 所以不要忘了写js的实现部分
    hump(input: string): string;
  }
}
export {};
