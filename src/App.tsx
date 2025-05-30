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
