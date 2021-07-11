/**
 * 接口 interface
 * > 用来定义一个类结构应该包含的属性和方法，同时接口可以当成类型声明去使用
 * - 接口可以定义相同名字，结果是同名接口合并
 */

/**
 * 1. 描述一个对象的类型
 */
type myType = {
  name: string;
  age: number;
};

const obj: myType = {
  name: "sam",
  age: 3,
};

/**
 * 2. 用接口实现
 */

interface Iperson {
  name: string;
  age: number;
}

const p1: Iperson = {
  name: "alice",
  age: 3,
};

/**
 * 3. 用 class 实现接口: implements
 */

interface IAnimal {
  name: string;
  age: number;
  sayHi(): void;
}

class Dog implements IAnimal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log("hi");
  }
}
