/**
 * class 类
 */

/**
 * 1. 属性：
 * - 实例属性
 * - 静态属性 static
 * - 只读属性 readonly
 * 属性修饰符：
 * - public: 公有属性，在任意位置（子类）可以访问（修改）。默认值
 * - private: 私有属性，只能在类内部进行访问（修改）
 * - protected: 保护属性，只能在当前类和子类中访问（修改）
 * - 属性存取器 get/set
 */
class Person1 {
  // 静态属性
  static sex: string = "male";

  // 只读属性
  readonly weight: number = 50;

  // 公有属性，默认值 public
  name: string;

  // 私有属性
  private _age: number;
  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }

  // 保护属性
  protected height: number = 180;

  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }
}

/**
 * 2. 方法：
 * - 实例方法
 * - 静态方法 static
 * ```
 * class Person2 {
 * // 实例方法
 *   jump() {
 *     console.log("jump");
 *   }
 *   // 静态方法
 *   static work() {
 *     console.log("work");
 *   }
 * }
 * ```
 */

class Person2 {
  // 实例方法
  jump() {
    console.log("jump");
  }
  // 静态方法
  static work() {
    console.log("work");
  }
}

/**
 * 3. 构造函数 constructor
 * ```
 * class Person3{
 *    name: string;
 *    constructor(name: string) {}
 * }
 * ```
 */
class Person3 {
  name: string;

  // 构造函数
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * 4. 继承 extends
 * - 父类也叫超类 super: super.sayHi(); super(name)
 */

/**
 * 5. 抽象类 abstract
 * - 只能用于子类继承的父类，不能用于创建实例
 * - 抽象方法 abstract sayHi():void; 只存在抽象类内部，用于定义方法，不实现
 */

/**
 * 可以直接将属性定义在构造函数中
 */

class Person5 {
  constructor(public name: string, public age: number) {}
}

const p2 = new Person5("sam", 12);
console.log(p2.name, p2.age);
