import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Agent } from 'http';

function App() {
  // let isCompleted: boolean = false;
  // const decimal: number = 6;
  // const name: string = 'Yauhen';
  // const sentence: string = `Hello, my name is ${ name }!`;
  // const u: undefined = undefined;
  // const n: null = null;


  // const greetUser = (): void =>  {
  //   alert("Hello, nice to see you!");
  // };

  // const greetUser: void = () => {
  //   alert("Hello, nice to see you!");
  // };

  // let list: number[] = [1, 2, 3];
  // let list1: Array<number> = [1, 2, 3];

  // let x: [string, number];
  // x = ['hello', 10];

  // let y: [string, number] = ["goodbuy", 42];
  // x = [10, 'hello'];

  // let y: [any, any] = ["goodbuy", 42];
  // let z: Array<any> = [10, "hello"];

  // let notSure: any = false;

  // notSure = true;
  // notSure = 42;
  // notSure = "hello";


  // enum Directions {
  //   Up,
  //   Down,
  //   Left,
  //   Right
  // }

  // console.log(Directions.Up);
  // console.log(Directions.Down);
  // console.log(Directions.Left);
  // console.log(Directions.Right);


  // enum Directions {
  //   Up = 2,
  //   Down = 4,
  //   Left = 6,
  //   Right
  // }

  // console.log(Directions.Up);
  // console.log(Directions.Down);
  // console.log(Directions.Left);
  // console.log(Directions.Right);


  // const msg = 'hello';
  // const error = (msg: string): never => {
  //   throw new Error(msg);
  // };

  // const infiniteLoop = (): never => {
  //   while (true) {

  //   };
  // };


  // const createPassword = (name: string = 'Max', age?: number | string) => {
  //   return `${name}${age}`;
  // };
  
  // createPassword('Jack', 31);
  // createPassword('Jack', '31');
  // createPassword();
  //createPassword(null);


  // const createSkills = (name: string, ...skills: Array<string>) =>
  //   `${name}, my skills are ${skills.join(', ')}`;

  // console.log(createSkills('Jack', 'JS', 'ES6', 'React'));


  //const createPassword = (name: string, age: number | string): string => `${name}${age}`;
  

  // let myFunc: (firstArg: string) => void;

  // function oldFunc(name: string):void {
  //   console.log(`Hello ${name}, nice to see you!`);
  // };

  // myFunc = oldFunc;
  // myFunc('Ivan');


  // let user: { 
  //   name: string, 
  //   age: number, 
  //   nickName: string, 
  //   secondNickName?: string 
  // } = {
  //   name: 'Yauhen',
  //   age: 30,
  //   nickName: 'webDev'
  // };

  // user.secondNickName = 'backendDev';


  // type Person = {
  //   name: string,
  //   age: number,
  //   nickName: string,
  //   secondNickName?: string,
  //   getPass?: () => string
  // }

  // let user: Person = {
  //   name: 'Yauhen',
  //   age: 30,
  //   nickName: 'webDev'
  // };

  // user.secondNickName = 'backendDev';

  // let admin: Person = {
  //   name: 'Max',
  //   age: 20,
  //   nickName: 'Mad',
  //   getPass(): string {
  //     return `${this.name}${this.age}`;
  //   },
  // };


  // class User {
  //   name: string;
  //   age: number;
  //   nickName: string;

  //   constructor( name: string, age: number, nickName: string ) {
  //     this.name = name;
  //     this.age = age;
  //     this.nickName = nickName;
  //   }
  // }

  // const yauhen = new User('Yauhen', 31, 'webDev');


  // class User {
  //   public name: string;
  //   private nickName: string = 'webDev';
  //   protected age: number = 20;
  //   readonly pass: number;
    
  //   constructor(name: string, nickName: string, age: number, pass: number) {
  //     this.name = name;
  //     this.age = age;
  //     this.nickName = nickName;
  //     this.pass = pass;
  //   };

  //   getPass(): string {
  //     return `${this.nickName}${this.age}`;
  //   };
  // }

  // const yauhen = new User('Yauhen', 'webDev',  31, 123);

  // console.log(yauhen.name);
  // console.log(yauhen.pass);
  // console.log(yauhen.getPass());


  // class User {
  //   constructor(
  //     public name: string,
  //     public age: number,
  //     public nickName: string,
  //     public pass: number
  //   ) {}

  //   getPass(): string {
  //     return `${this.nickName}${this.age}`;
  //   };
  // }

  // const yauhen = new User('Yauhen', 31, 'webDev', 123);

  // console.log(yauhen.name);
  // console.log(yauhen.pass);
  // console.log(yauhen.getPass());


  // class User {
  //   private age: number = 20;

  //   constructor(public name: string) {};

  //   setAge(age: number) {
  //     this.age = age;
  //   };

  //   set myAge(age: number) {
  //     this.age = age;
  //   };
  // }

  // const yauhen = new User('Yauhen');
  // yauhen.setAge(30);
  // yauhen.myAge = 31;


  // class User {
  //   static secret = 12345;

  //   constructor(
  //     public name: string,
  //     public age: number
  //   ){}

  //   getPass(): string {
  //     return `${this.name}, ${User.secret}`;
  //   }
  // }

  // const yauhen = new User('Yauhen', 31);
  // console.log(yauhen);
  // console.log(yauhen.getPass());


  // class User {
  //   private nickName: string = 'webDev';
  //   static secret: number = 12345;

  //   constructor(
  //     public name: string,
  //     public age: number
  //   ) {}

  //   getPass(): string {
  //     return `${this.name}${User.secret}`;
  //   }
  // }

  // const yauhen = new User('Yauhen', 31);
  // console.log(yauhen);
  // console.log(yauhen.getPass());

  // class Yauhen extends User {
  //   name: string = 'Yauhen';

  //   constructor( age: number) {
  //     super(name, age);
  //   }

  //   getPass(): string {
  //     return `${this.age}${this.name}${User.secret}`;
  //   }
  // }

  // const max = new User('Max', 20);
  // const yauhen2 = new Yauhen(31);
  // console.log(max);
  // console.log(yauhen2);
  // console.log(yauhen2.getPass());


  // abstract class User {
  //   constructor(
  //     public name: string,
  //     public age: number
  //   ) {}

  //   greet(): void {
  //     console.log(this.name);
  //   }

  //   abstract getPass(): string;
  // }

  // class Yauhen extends User {
  //   name: string = 'Yauhen';

  //   constructor(age: number) {
  //     super(name, age);
  //   }

  //   getPass(): string {
  //     return `${this.age}${this.name}`;
  //   }
  // }

  // const max = new Yauhen(20);
  // console.log(max);
  // max.greet();
  // console.log(max.getPass());


  // interface User {
  //   readonly name: string,
  //   age?: number,
  //   [propName: string]: any;
  // }

  // const yauhen: User = {
  //   name: 'Yauhen',
  //   age: 31,
  //   nickName: 'webDev',
  //   justTest: 'test',
  // }

  // yauhen.age = 30;
  // yauhen.name = 'Max';


  // interface User {
  //   name: string,
  //   age: number,
  //   getPass(): string,
  // }

  // class Yauhen implements User {
  //   name: string = 'Yauhen';
  //   age: number = 31;
  //   nickName: string = 'webDev';

  //   getPass() {
  //     return `${this.name} ${this.age}`;
  //   }
  // }


  // interface User {
  //   name: string,
  //   age: number,
  // }

  // interface Pass {
  //   getPass(): string,
  // }

  // class Yauhen implements User, Pass {
  //   name = 'Yauhen';
  //   age = 31;

  //   getPass() {
  //     return `${this.name} ${this.age}`;
  //   }
  // }


  // interface User {
  //   name: string,
  //   age: number,
  // }

  // interface Admin extends User {
  //   getPass(): string,
  // }

  // class Yauhen implements Admin {
  //   name: string = 'Yauhen';
  //   age: number = 31;

  //   getPass() {
  //     return `${this.name} ${this.age}`;
  //   }
  // }

  
  // class User<T, K> {
  //   constructor(
  //     public name: T,
  //     public age: K
  //   ){}

  //   public getPass(): string {
  //     return `${this.name}${this.age}`;
  //   }
  // }

  // const yauhen = new User('Yauhen', '31');
  // const max = new User(123, 321);
  // const leo = new User('Leo', 22);

  // console.log(yauhen.getPass());
  // console.log(max.getPass());
  // console.log(leo.getPass());


  // class User<T, K extends number> {
  //   constructor(
  //     public name: T,
  //     public age: K
  //   ){}

  //   public getPass(): string {
  //     return `${this.name}${this.age}`;
  //   }

  //   public getSecret(): number {
  //     return this.age**2;
  //   }
  // }

  // const yauhen = new User('Yauhen', 31);
  // const leo = new User(123, 321);
  // const max = new User('Max', '20');

  // console.log(yauhen.getPass());
  // console.log(leo.getPass());


  // const logClass = (constructor: Function) => {
  //   console.log(constructor);
  // };

  // @logClass
  // class User {
  //   constructor(
  //     public name: string,
  //     public age: number,
  //   ) {}

  //   public getPass(): string {
  //     return `${this.name}${this.age}`;
  //   }
  // }


  // const logProperty = (target: Object, propertyKey: string | symbol) => {
  //   console.log(propertyKey);
  // };

  // class User {
  //   @logProperty
  //   secret: number;

  //   constructor(
  //     public name: string,
  //     public age: number,
  //     secret: number
  //   ) {
  //     this.secret = secret;
  //   }

  //   public getPass(): string {
  //     return `${this.name} ${this.age}`;
  //   }
  // }


  // const logMethod = (
  //   target: Object,
  //   propertyKey: string | symbol,
  //   descriptor: PropertyDescriptor
  // ) => {
  //   console.log(propertyKey);
  // };

  // class User {
  //   constructor(
  //     public name: string,
  //     public age: number
  //   ) {}

  //   @logMethod
  //   public getPass(): string {
  //     return `${this.name} ${this.age}`;
  //   }
  // }


  // const logSet = (
  //   target: Object,
  //   propertyKey: string | symbol,
  //   descriptor: PropertyDescriptor
  // ) => {
  //   console.log(propertyKey);
  // };

  // class User {
  //   constructor(
  //     public name: string,
  //     public age: number
  //   ) {}

  //   @logSet
  //   set myAge(age: number) {
  //     this.age = age;
  //   }
  // }

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------



















// // Union types
// let data: number | string;
// data = 5;
// data = 'str';

// let color: 'red' | 'green';


// type MainInfo = {
//   firstname: string;
//   lastname: string;
// };

// type AdditionalInfo = {
//   age: number
// };

// type FullInfo = AdditionalInfo | MainInfo;

// const info0: FullInfo = {
//   firstname: '123',
//   lastname: '123',
//   age: 123
// };

// const info1: FullInfo = {
//   firstname: '123',
//   lastname: '123',
// };

// const info2: FullInfo = {
//   age: 123
// };

// //---------------------------------------------------------


// // Intersection type
// type MainInfo = {
//   firstname: string;
//   lastname: string;
// };

// type AdditionalInfo = {
//   age: number
// };

// type FullInfo = AdditionalInfo & MainInfo;

// const info0: FullInfo = {
//   firstname: '123',
//   lastname: '123',
//   age: 123
// };

// // // Type Error
// // const info1: FullInfo = {
// //   firstname: '123',
// //   lastname: '123',
// // };

// //---------------------------------------------------------



// // Super type and Subtype
// type SuperType = {
//   name: string;
// };

// type SubType = {
//   name: string;
//   age: number;
// }

// const subType: SubType = {
//   name: 'Ulbi TV',
//   age: 25
// };
// // All OK? no errors
// const superType: SuperType = subType;

// const superType2: SuperType = { name: 'Ulbi TV' };
// // // Type error
// // const subType2: SubType = superType2;

// //---------------------------------------------------------



// // Special types

// // // any type
// // let value: any;
// // value = 5;
// // value = [];
// // value = {};

// // function logData(data: any) {
// //   console.log(data);
// // }


// // // unknown type
// // function logData(data: unknown) {
// //   let value: string;
// //   // // Type error
// //   // value = data;

// //   // No errors
// //   if (typeof data === 'string') {
// //     value = data;
// //   }

// //   console.log(data);
// // }

// // never type
// enum Values {
//   FIRST,
//   SECOND,
//   THIRD
// };

// function fn(value: Values) {
//   console.log(value);

//   switch(value) {
//     case Values.FIRST:
//       return 1;
//     case Values.SECOND:
//       return 2;
//     default:
//       // const exhaustiveCheck: never = value;
//       return value;
//   }
// }

// fn(Values.FIRST);
// fn(Values.SECOND);
// fn(Values.THIRD);


// // void type
// function fn1(text: string): void {
//   console.log(text)
// }

// type Fn = (arg: number, arg2: string) => void;

// // ---------------------------------------------------------



// composite types

// // interface and type
// interface Address {
//   city?: string;
//   street?: string;
//   coords: number[];
// }

// type User = {
//   firstname: string;
//   age?: number;
//   address: Address;
// }

// const user: User = {
//   firstname: 'Petrov',
//   age: 35,
//   address: {
//     city: 'City',
//     street: 'Street',
//     coords: [123142, 346745]
//   }
// }

// const users: User[] = [user];


// // literals
// type Color = 'red' | 'green' | 'blue';
// type Yellow = 'yellow';
// type Size = 4 | 8 | 16;
// type Bool = false | true;

// const color: Color = 'red';
// const color1: Color = 'green';
//   // // Error
//   // const color3: Color = 'sdfsdf';

// type EventName = 'click' | 'change';
// type EventHandler = `on${EventName}`;
// type Userid = `user_id_${bigint}`;
// type UserName = `user_name_${string}`;

// // ---------------------------------------------------------



// // Generics
// interface MetaData {

// }

// interface Article {
//   title: string
// }

// interface User {
//   username?: string;
//   id: string;
//   createdAt: Date;
// }

// interface ApiResponse<T, Meta, Value> {
//   status?: 'error' | 'success';
//   meta?: Meta;
//   requestId?: string;
//   data: T;
//   value?: Value;
// }

// interface MetaData {
//   timestamp: string
// }

// const responseFromUserApi: ApiResponse<User, MetaData> = {
//   data: {
//     username: '123'
//   },
//   meta: {
//     timestamp: '8468414554'
//   }
// }

// const responseFromArticleApi: ApiResponse<Article> = {
//   data: {
//     title: 'Ulbi TV'
//   }
// }

// interface Tree<T> {
//   id?: string;
//   name?: string;
//   value?: T;
//   children: Tree<T>[] | null;
// }

// const treeNode: Tree<User> = {
//   id: '10',
//   value: {
//     username: '123',
//     id: '324545',
//     createdAt: new Date(),
//   },
//   children: [
//     {
//       value: {
//         username: '123',
//         id: '324545',
//         createdAt: new Date(),
//       },
//       children: null
//     }
//   ]
// }

// // generics in functions
// function genericFn<T>(arg: T) {
//   return arg;
// }

// const arrowGeneric = <T, V>(arg: T, arg1: V): T => {
//   return arg;
// }

// const data = arrowGeneric<User, Article>(
//   {username: '123',
//     id: '324545',
//     createdAt: new Date(),
//   },
//   {title: 'Title'}
// );

// // Constraints in generics
// function createEntity<T extends {id: string, createdAt: Date}>(arg: T) {
//   return arg.createdAt;
// }

// const entity = createEntity<User>({id: '3245', createdAt: new Date()});

// // Default types
// interface User1 {
//   username: string;
// }

// interface Article1 {
//   title: string;
// }

// interface ApiResponse1<Data = string> {
//   status?: 'error' | 'success';
//   requestId?: string;
//   data: Data;
// }

// const response: ApiResponse1 = {
//   data: 'sdfsdf'
// }

// interface ApiResponse2<Data = User1> {
//   status?: 'error' | 'success';
//   requestId?: string;
//   data: Data;
// }

// const response1: ApiResponse2<User1> = {
//   data: {username: 'Username'},
// }

// // Generics in classes
// class Order<T> {
//   private data: T;

//   constructor(arg: T) {
//     this.data = arg;
//   }
// }

// // Conditional types
// type isArray<T> = T extends any[] ? true : false; // A type that checks whether the passed generic is an array
// // // Error
// // const first:isArray<string> = true;
// // No error
// const second:isArray<string> = false;
// const third:isArray<string[]> = true;

// type User3 = {
//   username: string;
// }
// type RandomName<T> = T extends User3 ? { value: number } : { value: string };
// const fourth: RandomName<User3> = {value: 45654};
// const fifth: RandomName<number> = {value: 'string'};
// const sixth: RandomName<{usrname: string, age: number}> = {value: 'string'}

// // ---------------------------------------------------------



// // Narrowing of types
// function fn(arg: number | string | null) {
//   if ( typeof arg === 'number' ) {
//     arg.toFixed(2);
//     return;
//   } else if ( typeof arg === 'string' ) {
//     return;
//   }
//   return arg;
// }

// function fn2( arg: number | string | null, arg2: number ) {
//   if ( arg === null ) {
//     return arg;
//   }
//   if ( arg === arg2 ) {
//     console.log( arg )
//   }
//   return arg;
// }


// interface User {
//   username: string;
//   age: number;
// }

// interface Person {
//   lastname: string;
//   firstname: string;
//   age: number;
// }

// function fn3(arg: User | Person) {
//   if ('username' in arg) {
//     return arg;
//   }
//   if ('firstname' in arg) {
//     return arg;
//   }
//   return arg;
// }


// // class Bmw {
// //   bmwDrive() {};
// // };
// // class Audi {
// //   audiDrive() {};
// // };

// // const bmw = new Bmw();
// // const audi = new Audi();

// // function fn4( arg: Bmw | Audi ) {
// //   if ( arg instanceof Bmw ) {
// //     arg.bmwDrive();
// //   } else {
// //     arg.audiDrive();
// //   }
// // };


// interface BaseCar {
//   maxSpeed: number;
//   weight: number;
// };

// interface Bmw extends BaseCar {
//   type: 'bmw';
//   bmwField: string;
// };

// interface Audi extends BaseCar {
//   type: 'audi';
//   audiField: string;
// };

// interface Toyota extends BaseCar {
//   type: 'toyota';
//   toyotaField: string;
// }

// const newCar: Bmw = {
//   type: 'bmw',
//   bmwField: 'bmwField',
//   maxSpeed: 200,
//   weight: 1600,
// };

// type Car = Audi | Bmw | Toyota;

// function fn5(arg: Car) {
//   switch(arg.type) {
//     case 'audi':
//       console.log(arg.audiField);
//       break;
//     case 'bmw':
//       console.log(arg.bmwField);
//       break;
//     case 'toyota':
//       console.log(arg.toyotaField);
//       break;
//     default:
//       console.log(arg);
//   }
//   return arg;
// }

// // ---------------------------------------------------------



// // Type guards
// interface Car {
//   maxSpeed: number;
//   width: number;
// }

// interface BMW extends Car {
//   type: 'bmw';
// }

// interface Audi extends Car {
//   type: 'Audi';
// }

// interface Person {
//   age: number;
//   name: string;
// }

// function isBmw(value: BMW | Audi): value is BMW {
//   return value.type === 'bmw';
// }

// function isAudi(value: BMW | Audi): value is Audi {
//   return value.type === 'Audi';
// }

// function isCar(value: Car | Person): value is Car {
//   return 'maxSpeed' in value && 'width' in value;
// }

// function isPerson(value: Car | Person): value is Person {
//   return 'age' in value && 'name' in value;
// };

// function fn(data: Car | Person) {
//   if ( isCar(data) ) {
//     console.log(data.maxSpeed);
//   } else {
//     console.log(data.name)
//   }
// }

// function fn1(data: Car | Person | BMW | Audi) {
//   if ( isCar(data) ) {
//     console.log(data.maxSpeed);

//     if ('type' in data) {
//       if (isBmw(data)) {
//         console.log(data.type);
//       } else if (isAudi(data)) {
//         console.log(data.type);
//       }
//     }
//   } else if (isPerson(data)) {
//     console.log(data.name)
//   }
// }

// // ---------------------------------------------------------



// // Type conversion
// interface Person {
//   age: number;
//   username: string;
//   password: string;
// }

// const obj = {
//   age: 25,
//   username: 'Ulbi TV'
// } as Person; // Type assertion

// // 4.9 typescript
// const obj1 = {
//   age: 25,
//   username: 'Ulbi TV',
//   password: '123',
// } satisfies Person;


// // Type assertion for data received from outside
// function JSONParse<T>(data: string): T {
//   return JSON.parse(data) as T;
// }

// const parseJson = JSONParse<Person>('{age:25}');
// // or
// const parseJson1: Person = JSON.parse('{age: 25}');

// async function fn2() {
//   const data = await fetch('');
//   // parseData has any type
//   const parsedData = await data.json();
// }


// const PersonKeys = {
//   age: 'age',
//   username: 'username',
//   password: 'password',
// } as const; // makes fields read-only

// //const keys = Object.keys(obj);

// function keys<T extends object>(data: T): Array<keyof T> {
//   return Object.keys(data) as Array<keyof T>
// }

// const k = keys(obj);

// // ---------------------------------------------------------



// Object trap
function keys<T extends Object>(data: T): Array<keyof T> {
  return Object.keys(data) as Array<keyof T>;
}
// Cases often arise when we need to specify the receipt of an object 
// of arbitrary structure. If we specify empty object or 'Object' 
// as the type, then any data types will be accepted without errors 
// except null and undefined
type EmptyObject = {};
const obj1: EmptyObject = {};
const obj2: EmptyObject = 1;
const obj3: EmptyObject = "";
const obj4: EmptyObject = () => {};
// Types 'null' ann 'undefined' is not assignable to type 'EmptyObject'
// const obj5: EmptyObject = null;
// const obj6: EmptyObject = undefined;
// With Object as a type everything is similar
const obj7: Object = {};
const obj8: Object = 1;
const obj9: Object = "";
const obj10: Object = () => {};
// Types 'null' ann 'undefined' is not assignable to type 'Object'
const obj11: Object = null;
const obj12: Object = undefined;

//In such cases, it is necessary to use the 'object' type 
// with a lowercase letter, which only accepts 'Object', 'array', 
// and 'function' types.
const obj13: object = {};
// type error
// const obj14: object = 1;
// const pbj15: object = "";
const obj16: object = () => {};
// type error
// const obj17: object = null;
// const obj18: object = undefined;
const obj19: object = [];

function keys1<T extends object>(data: T): Array<keyof T> {
  return Object.keys(data) as Array<keyof T>;
}









  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
