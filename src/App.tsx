import React from 'react';
import logo from './logo.svg';
import './App.css';

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



// Generics
interface MetaData {

}

interface Article {
  title: string
}

interface User {
  username?: string;
  id: string;
  createdAt: Date;
}

interface ApiResponse<T, Meta, Value> {
  status?: 'error' | 'success';
  meta?: Meta;
  requestId?: string;
  data: T;
  value?: Value;
}

interface MetaData {
  timestamp: string
}

const responseFromUserApi: ApiResponse<User, MetaData> = {
  data: {
    username: '123'
  },
  meta: {
    timestamp: '8468414554'
  }
}

const responseFromArticleApi: ApiResponse<Article> = {
  data: {
    title: 'Ulbi TV'
  }
}

interface Tree<T> {
  id?: string;
  name?: string;
  value?: T;
  children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
  id: '10',
  value: {
    username: '123',
    id: '324545',
    createdAt: new Date(),
  },
  children: [
    {
      value: {
        username: '123',
        id: '324545',
        createdAt: new Date(),
      },
      children: null
    }
  ]
}

// generics in functions
function genericFn<T>(arg: T) {
  return arg;
}

const arrowGeneric = <T, V>(arg: T, arg1: V): T => {
  return arg;
}

const data = arrowGeneric<User, Article>(
  {username: '123',
    id: '324545',
    createdAt: new Date(),
  },
  {title: 'Title'}
);

// Constraints in generics
function createEntity<T extends {id: string, createdAt: Date}>(arg: T) {
  return arg.createdAt;
}

const entity = createEntity<User>({id: '3245', createdAt: new Date()});








  
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
