import Link from 'next/link';
import Code from 'components/prism/Code';

const React = () => {
  return (
    <div>
      <div className='title'># React</div>
      {/* <Code language='js'>
        {
          ``
        }
      </Code> */}
      
      <div className='title sub'>create-react-app</div>
      <Code language='bash'>
        {
          `npx create-react-app project-name
cd project-name
npm start
# Next.js
npx create-next-app project-name
`
        }
      </Code>
  
      <div className='title sub'>craco</div>
      <p>
        CRA(create-react-app) 으로 프로젝트를 생성할 때 webpack 의 기본 설정들을 포함하고 있다.
        추가적으로 환경설정을 커스텀해야 할 경우가 많은데 CRA 의 환경 설정파일을 수정을 쉽게 커스텀하기 위해 등장한 것이 <Link href={'/posts/craco'}>craco(Create-react-app Configuration Override)</Link> 이다.
      </p>

      <div className='title sub'>router</div>
      <Code language='bash'>
        {
          `npm install -D react-router-dom`
        }
      </Code>

      <div className='title sub'>store ( <Link href={'/posts/redux'}>Redux</Link> )</div>
      <p>redux - Vue.js 의 vuex</p>
      <p>@reduxjs/toolkit - redux를 효율적으로 관리하기 위한 라이브러리</p>
      <p>react-redux - Redux의 기능을 효율적으로 편리하게 사용하기 위한 Sub Package</p>

      <div className='title'># Hooks</div>
      <Link href={'https://ko.reactjs.org/docs/hooks-reference.html'}><a target='_blank'>Hooks API Reference</a></Link>

      <div className='title sub'>useState</div>
      <p>component 상태(state)관리</p>

      <div className='title sub'>useEffect</div>
      <p>React의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것 ( react 공식 문서 )</p>

      <div className='title sub'>useContext</div>
      <p>context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법 ( react 공식문서 )</p>
      <p>props를 이용하여 데이터 전달할 필요 없이 context를 이용하여 데이터를 전달</p>
      <ul className='list'>
        <li><span className='box'>createContext</span> : context 생성</li>
        <li><span className='box'>Provider</span> : context 전달</li>
        <li><span className='box'>Consumer</span> : context 변화 감시 역할</li>
      </ul>

      <div className='title sub'>useReducer</div>
      <p>useState의 대체 함수</p>

      <div className='title sub'>useCallback</div>
      <p>함수를 메모이제이션(memoization)하기 위해서 사용되는 hook 함수. 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용</p>

      <div className='title sub'>useMemo</div>
      <p>성능 최적화를 위하여 연산된 값을 useMemo라는 Hook 을 사용하여 재사용</p>
      <Code language='js'>
        {
          `useCallback(fn, deps)은 useMemo(() => fn, deps)와 같습니다.`
        }
      </Code>

      <div className='title sub'>useRef</div>
      <p>컴포넌트나 HTML 요소를 래퍼런스로 관리할 수 있다.</p>

      <div className='title sub'>forwardRef</div>
      <p>useRef로 만든 래퍼런스를 상위 component로 전달</p>

      <div className='title sub'>useLayoutEffect</div>

      <div className='title sub'>useImperativeHandle</div>

      <div className='title sub'>useDebugValue</div>
    </div>
  )
}
export default React;