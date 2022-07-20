import Code from 'components/prism/Code'
import Link from 'next/link';

const ES2022 = () => {
  return (
    <div>
      <div className='title'># ES2022</div>
      <div className='title sub'>인덱싱 가능한 값의 메서드 .at().</div>
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
      
      <div className='title sub'>Class Fields</div>

      <div className='title'># ES2021</div>
      <div className='title sub'>string.replaceAll()</div>
      <div className='title sub'>Promise.any()</div>
      <div className='title sub'>Numeric separators ( 숫자 구분 기호 _ )</div>
      <div className='title sub'>Logical OR assignment (||=)</div>
      <div className='title sub'>Logical AND assignment (&&=)</div>
      <div className='title sub'>Logical nullish assignment (??=)</div>

      <div className='title'># ES2020</div>
      <div className='title sub'>Dynamic Import</div>
      <div className='title sub'>Private Class Variables</div>
      <div className='title sub'>Optional Chaining</div>
      <div className='title sub'>Promise.allSettled</div>
      <div className='title sub'>String.prototype.matchAll()</div>
      <div className='title sub'>globalThis</div>
      <div className='title sub'>BigInt</div>
      <div className='title sub'>Nullish Coalescing Operator</div>

      <div className='title'># ES2019</div>
      <div className='title'># ES2018</div>
      <div className='title'># ES2017</div>
      <div className='title'># ES2015 ( ES6 )</div>
    </div>
  )
}

export default ES2022;