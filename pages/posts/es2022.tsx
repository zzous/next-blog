import Code from 'components/prism/Code'
import Link from 'next/link';

const ES2022 = () => {
  return (
    <div>
      <div className='title'># ES2022</div>
      <div className='title sub'>인덱싱 가능한 값의 메서드 .at()</div>
      <p>이 함수는 주어진 인덱스에서 요소를 읽어 반환한다.</p>
      <p>음수 적용 가능 ( 뒤에서 읽음 )</p>

      <Code language='js'>
        {
`const _arr = [1, 2, 3, 4, 5];
console.log(_arr.at(2))   // 3
console.log(_arr.at(-2))  // 4
`
        }
      </Code>
      
      <div className='title sub'>Object.hasOwn(obj, key)</div>
      <p>Object.hasOwnProperty() 를 대체</p>
      <p>key가 obj 객체의 자체 속성인지 확인하는 안전한 방법</p>
      <p>속성이 상속되거나 존재하지 않는 경우 메서드는 false를 반환</p>
      <Code language='js'>
        {
`const object1 = {
  prop: 'exists'
};

console.log(Object.hasOwn(object1, 'prop'));
// expected output: true

console.log(Object.hasOwn(object1, 'toString'));
// expected output: false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// expected output: false
`
        }
      </Code>
      <p>[Code] <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn'><a target='_blank'>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn</a></Link></p>

      <div className='title sub'>Top-level await</div>
      <p>비동기 함수나 메서드를 입력할 필요없이 최상위 모듈에서 await를 사용 가능</p>
      
      <div className='title sub'>Class Fields ( Class public Instance Fields & private Instance Fields )</div>
      <p>ES2022 이전 버전에서의 클래스 속성 정의</p>
      <Code language='js'>
        {
`class ButtonToggle extends HTMLElement {
  constructor(){
      super();
      // public field
      this.color = 'green'
      // private field
      this._value = true;
  }

  toggle(){
      this.value = !this.value
  }
}

const button = new ButtonToggle();
console.log(button.color);
// green - public fields are accessible from outside classes

button._value = false;
console.log(button._value);
// false - no error thrown, we can access it from outside the class
`
        }
      </Code>
      <p>ES2022</p>
      <Code language='js'>
        {
`class ButtonToggle extends HTMLElement {

  color = 'green';
  #value = true;

  toggle(){
      this.#value = !this.#value;
  }
}
const button = new ButtonToggle();
console.log(button.color);
// green - public fields are accessible from outside classes

// SyntaxError - cannot be accessed or modified from outside the class
console.log(button.#value); 
button.#value = false;
`
        }
      </Code>
      <p>constructor 내부에서 field 를 정의할 필요가 없고, # 을 붙여 private field 를 정의 할 수 있다.</p>

      <div className='title'># ES2021</div>
      <div className='title sub'>String.prototype.replaceAll()</div>
      <p>replaceAll() 메서드는 패턴의 모든 일치 항목이 대체 항목으로 대체된 새 문자열을 반환한다.</p>
      <p>ES2021 이전에는 replaceAll 메서드가 없어 replace 와 정규식을 이용하여 사용했다.</p>
      <Code language='js'>
        {
`// replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/ig;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


// replaceAll()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
`
        }
      </Code>
      <p>( * i : 대소문자 구분 없이 * g : 전역으로 검색 )</p>
      <p>[Code] <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it'><a target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it</a></Link></p>

      <div className='title sub'>Promise.any()</div>
      <p>동시에 실행되는 Promise 중 하나가 처리되면 해당 Promise 가 return 된다.</p>
      <p>반복가능한 promises 중에 모든 Promise 가 reject 인 경우 그룹화 된 Promise 의 하위 클래스인 <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"><a target="_blank">AggregateError</a></Link>(하나의 작업에서 여러 오류를 반환해야 하는 경우의 유형) return</p>
      <Code language='js'>
        {
`const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"
`
        }
      </Code>
      <p>[Code] <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it"><a target='_blank'>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it</a></Link></p>

      <div className='title sub'>Numeric separators ( 숫자 구분 기호 _ )</div>
      <p>'_' 를 숫자 사이에 삽입할 수 있다. ( 입력해도 수치로 인식 )</p>
      <p>10진수 + 8진수, 16진수 및 2진수에서도 사용 가능</p>
      <p>( TypeScript의 버전 2.7부터 사용 가능 )</p>
      <Code language='js'>
        {
`// const value = 100000000;
const value = 100_000_000;
const octalValue  = 0o32_12;
const hexValue    = 0xff_55_00;
const binaryValue = 0b1010_1011_1111;
`
        }
      </Code>

      <div className='title sub'>Logical OR assignment (||=)</div>
      <Code language='js'>
        {
`let foo;
foo ||= 'bar';
console.log(foo) // bar

foo ||= 'baz';
console.log(foo) // bar
`
        }
      </Code>
      <div className='title sub'>Logical AND assignment (&&=)</div>
      <Code language='js'>
        {
`let foo;
foo &&= 'bar';
console.log(foo) // undefined (no assignment because foo is falsy)

foo = 10;

foo &&= 'baz';
console.log(foo) // baz
`
        }
      </Code>
      <div className='title sub'>Logical nullish assignment (??=)</div>
      <p>null or undefined 일때 할당</p>
      <Code language='js'>
        {
`let foo;
foo ??= 'bar';
console.log(foo) // bar

foo = false;

foo ??= 'baz';
console.log(foo) // bar (No assignment because foo is not nullish)
`
        }
      </Code>

      <div className='title'># ES2020</div>
      <div className='title sub'>Dynamic Import</div>
      <p>동적으로 module 을 가져올 수 있게 되어, await 와 함께 사용할 수 있다.</p>
      <Code language='js'>
        {
`// module.js
const example = (value) => console.log(value);
export { example };

// in page
const doExample = async (value) => {
  const _module = await import('module.js');
  _module.example(value);
};
doExample('test');`
        }
      </Code>
      <div className='title sub'>Private Variables in Class</div>
      <p>Class 내에서 개인 변수 선언 가능 ( 외부에서는 사용 할 수 없음 )</p>
      <Code language='js'>
        {
`class MyClass {
  #privateVariable = "Hello world"

  helloWorld() {
    console.info(this.#privateVariable)
  }
}

const myClass = new MyClass();
myClass.helloWorld();     // Hello world
console.info(myClass.#privateVariable)  // SyntaxError`
        }
      </Code>

      <div className='title sub'>Optional Chaining</div>
      <p>?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 참조가 nullish ( null 또는 undefined ) 라면, 에러가 발생하는 것 대신에 undefined 리턴</p>
      <Code language='js'>
        {
`const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined`
        }
      </Code>
      <p>[Code] <Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining</a></Link></p>
      
      <div className='title sub'>Promise.allSettled</div>
      <p><Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled</a></Link></p>

      <div className='title sub'>String.prototype.matchAll()</div>
      <p><Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll'><a target='_blank'>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll</a></Link></p>

      <div className='title sub'>globalThis</div>
      <p><Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis</a></Link></p>

      <div className='title sub'>BigInt</div>
      <p><Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt</a></Link></p>

      <div className='title sub'>Nullish Coalescing Operator</div>
      <p>nullish 병합 연산자 (??) 는 왼쪽이 null or undefined 인경우 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽을 반환한다. ( false or NaN 의 경우는 해당 안됨 )</p>
      <Code language='js'>
        {
`const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0`
        }
      </Code>
      <p>[Code] <Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator</a></Link></p>

      <div className='title'># ES2019</div>
      <div className='title sub'>Object.fromEntries()</div>
      <p><span className="box">Object.fromEntries()</span> 메서드는 키값 쌍의 목록을 객체로 바꾼다.</p>
      <Code language='js'>
        {
          `const entries = [
  ['foo', 'bar'],
  ['baz', 42]
];

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }`
        }
      </Code>
      <p>[Code] <Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries</a></Link></p>

      <div className='title sub'>trimStart() and trimEnd()</div>
      <p><span className="box">trimStart()</span> 메서드는 문자열 시작부분의 공백을 제거</p>
      <p><span className="box">trimEnd()</span> 메서드는 문자열 끝부분의 공백을 제거</p>
      <p><span className="box">trim()</span> 메서드는 문자열 양 끝의 공백을 제거</p>
      <Code language='js'>
        {
`const greeting = '   Hello world!   ';

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

console.log(greeting.trimEnd());
// expected output: "   Hello world!";

console.log(greeting.trim());
// expected output: "Hello world!";`
        }
      </Code>

      <div className='title sub'>Array.prototype.flat() and Array.prototype.flatMap()</div>
      <p>flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성</p>
      <p>flatMap() 메서드는 배열에 대한 결합된 병합 및 매핑 동작. 결과를 단일 배열로 병합</p>
      <p><Link href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap'><a target='_blank'>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap</a></Link></p>
      <Code language='js'>
        {
          `[1, 2, 3, 4, 5].map(data => [data * 2, data * 3]);
          //[[2, 3], [4, 6], [6, 9], [8, 12], [10, 15]]
          
          [1, 2, 3, 4, 5].map(data => [data * 2, data * 3]).flat();
          //[2, 3, 4, 6, 6, 9, 8, 12, 10, 15];
          
          [1, 2, 3, 4, 5].flatMap(data => [data * 2, data * 3]);
          //[2, 3, 4, 6, 6, 9, 8, 12, 10, 15]`
        }
      </Code>


      <div className='title sub'>Symbol.prototype.description</div>
        <p><Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description'><a target='_blank'>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description</a></Link></p>

      <div className='title'># ES2018</div>
      <div className='title sub'>Lifting template literal restriction.</div>
      <div className='title sub'>s (dotAll) flag for regular expressions.</div>
      <div className='title sub'>RegExp named capture groups.</div>
      <div className='title sub'>Rest/Spread Properties.</div>
      <div className='title sub'>RegExp Lookbehind Assertions.</div>
      <div className='title sub'>RegExp Unicode Property Escapes.</div>
      <div className='title sub'>Promise.prototype.finally.</div>
      <div className='title sub'>Asynchronous Iteration.</div>

      <div className='title'># ES2017</div>
      <div className='title sub'>Object.values/Object.entries</div>
      <div className='title sub'>String padding</div>
      <div className='title sub'>Object.getOwnPropertyDescriptors</div>
      <div className='title sub'>Trailing commas in function parameter lists and calls</div>
      <div className='title sub'>Async functions</div>
      <div className='title sub'>Shared memory and atomics</div>

      <div className='title'># ES2015 ( ES6 )</div>
      <div className='title sub'>Var, let and Const</div>
      <div className='title sub'>Template literals</div>
      <div className='title sub'>Default Arguments</div>
      <div className='title sub'>Arrow Functions</div>
      <div className='title sub'>Array and Object Destructuring</div>
      <div className='title sub'>Map, Reduce and Filter</div>
      <div className='title sub'>Iterables and Looping</div>
      <div className='title sub'>Rest and Spread Operator</div>
      <div className='title sub'>Object Literals</div>
      <div className='title sub'>Classes in ES6</div>
      <div className='title sub'>Promises</div>
    </div>
  )
}

export default ES2022;