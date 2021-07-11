/**
 * generic 泛型：类型不明确时使用，在函数执行时确定
 */

function fn<T>(a: T): T {
  return a;
}

fn<string>("hello"); // 指定泛型

fn(10); // 不指定泛型，TS自动对类型进行推断

/**
 * 指定多个泛型
 */

function fn2<T, K>(a: T, b: K): T {
  return a;
}

fn2<number, string>(11, "hello");

/**
 * 泛型接口
 */
interface Inter {
  length: number;
}

function fn3<T extends Inter>(a: T): number {
  return a.length;
}

console.log(fn3("hi"));

/**
 * 泛型类
 */

class Person6<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const p3 = new Person6<string>("tom");
console.log(p3);
