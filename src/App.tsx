import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type Name = string;
  let name: Name = 'Alexandr';
  let isCompleted: boolean = false;
  //isCompleted  = 42;  // Error
  //isCompleted = '42';   // Error
  isCompleted = true;
  const decimal: number = 6;
  const integer: number = 7.10;
  const hex: number = 0xf00d;
  const binary: number = 0b1010;
  const octal: number = 0o744;
  const sentence: string = 'Yauhen';
  const nameString: string = `Hello, my name is ${ sentence }!`;
  const u: undefined = undefined;
  const n: null = null;
  
  const greetUser = (): void => {
      alert("Hello, nice to see you!");
  };
  
  let list1: number[] = [1, 2, 3];
  let list2: Array<number> = [1, 2, 3];

  let a: [string, number];
  a = ["hello", 10];
  //Error casee:
  //a = [10, "hello"]; // Type 'string' is not assignable to type 'number'

  let x: [string, number] = ["goodbuy", 42];

  let y: [any, any] = ["goodby", 42];
  let z: Array<any> = [10, "hello", true]; 
  
  //Enum Type
  enum Directions {
    Up,
    Down,
    Left,
    Right
  }
  console.log(Directions.Up);      // 0
  console.log(Directions.Down);    // 1
  console.log(Directions.Left);    // 2
  console.log(Directions.Right);   // 3
  
  enum Directions1 {
      Up = 2,
      Down = 4,
      Left = 6,
      Right
  }
  console.log(Directions1.Up);      // 2
  console.log(Directions1.Down);    // 4
  console.log(Directions1.Left);    // 6
  console.log(Directions1.Right);   // 7
  
  // Never Type
  const msg = "hello";
  const error = (msg: string): never => {
      throw new Error(msg);
  };
  
  const infiniteLoop = (): never => {
      while (true) {}
  };
  
  // Object Type
  const create = (o: object | null): void => { };
  //create(1);  // Argument of type '1' is not assignable to parameter of type 'object | null'
  //create('42'); // Argument of type 'string' is not assignable to parameter of type 'object | null'
  create({ obj: 1 });

  //Multiple types for one value
  let id: number | string;
  id = 10;
  id = '42';
  //id = true;  //Type 'boolean' is not assignable to type 'string | number'
  
  // Type (Custom type creation)
  type Name1 = string;
  let ida: Name1;
  ida = "42";
  //ida = 10;  //Type 'number' is not assignable to type 'string'
  
  //Reverse enum
  enum Directions2 {
      Up,
      Down,
      Left,
      Right
  }
  console.log(Directions2[0]);    // "Up"
  console.log(Directions2[1]);    // "Down"
  console.log(Directions2[2]);    // "Left"
  console.log(Directions2[3]);    // "Right"
  
  enum Directions3 {
      Up = 2,
      Down = 4,
      Left = 6,
      Right = 8
  }
  console.log(Directions3.Up);    // 2
  console.log(Directions3.Down);  // 4
  console.log(Directions3[6]);    // "Left"
  console.log(Directions3[8]);    // "Right"
  
  // Custom name for keys
  enum links {
      youtube = 'https://youtube.com/',
      vk = 'https://vk.com',
      facebook = 'https://facebook.com'
  }
  console.log(links.vk);          // "https://vk.com"
  console.log(links.youtube);     // "https://youtube.com"
  
  
  // Function Examples
  const createPassword = (name: string = 'Max', age: number | string = 20) => `${name} ${age}`;
  
  console.log(createPassword('Jack', 31));   // "Jack 31"
  console.log(createPassword('Jack', '31')); // "Jack 31"
  console.log(createPassword());             // "Max 20"
  
  // Function with optional arguments and returned type is string
  const createPassword1 = (name?: string, age?: number): string => `${name} ${age}`;
  
  // REST type
  const createSkills = (name: string, ...skills: Array<string>): string => 
                          `${name}, my skills are ${skills.join()}`;
  
  console.log(createSkills('Jack', 'JS', 'ES6', 'React')); // "Jack, my skils are JS, ES6, React"
  
  // Void
  //   const greetUser1: void = () => {
  //       alert("Hello, nice to see you!");
  //   };
  
  //Never Type
  // Function return Error
  const msg1 = "hello";
  const error1 = (msg1: string): never => {
      throw new Error(msg1);
  };
  
  // Function infinite loop
  const infiniteLoop1 = (): never => {
      while (true) {
      }
  };
  
  // Describe function type
  let myFunc: (firstArg: string) => void;
  
  function oldFunc(name: string): void {
      alert(`Hello ${name}, nice to see you!`);
  };
  
  myFunc = oldFunc;
  
  // Define object type
  let user: { name: string, age: number, nickName: string } = {
      name: 'Yauhen',
      age: 30,
      nickName: 'webDev',
  };
  
  // Using Type for objects structure
  type Person = { 
      name: string, 
      age: number, 
      nickName?: string,
      getPass?: () => string,
  };
  
  // Apply Person type for object with the same structure
  let user1: Person = {
      name: 'Yauhen',
      age: 30,
      nickName: 'webDev',
  };
  
  let admin2: Person = {
      name: 'Max',
      age: 20,
      nickName: 'Mad',
      getPass: function func () {
          return `${this.name}${this.age}`;
      },
  };  

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
