import Code from 'components/prism/Code'
const Redux = () => {
  return (
    <div>
      <div className='title'># Redux Core</div>
      <div className='title'>install</div>
      <Code language='bash'>
        {
`# NPM
npm install redux

# Yarn
yarn add redux
`
        }
      </Code>
      
      <div className='title'># Redux Toolkit​</div>
      <p>The official, opinionated, batteries-included toolset for efficient Redux development</p>
      <p>redux 를 사용할 때 온전한 store 의 상태 관리에 동반되는 많은 것들이 있다. ( action, reducer, thunk, reselect 등 ) 
        redux-toolkit 은 이러한 기능들을 효율적으로 관리하기 위해 만들어졌다. ( redux 공식 라이브러리 )
      </p>
      <div className='title'>install</div>
      <Code language='bash'>
        {
`# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
`
        }
      </Code>
      <div>
        <div className='title'>configureStore</div>
        <div className='title'>createSlice</div>
        <p>action + reducer → slice</p>
        <div className='title'>createAsyncThunk</div>
        <div className='title'>createSelector</div>
        {/* <p>Defect security of useSelector function: Only works when the value stored in memory is changed using memoization</p> */}
        <p>useSelector 함수의 결점보안: memoization 을 이용하여 메모리에 저장된 값이 변경되었을 경우에만 동작</p>
      </div>
      
      <div className='title'># Redux Sub Package</div>
      <div className='title'>install</div>
      <Code language='bash'>
        {
`# NPM
npm install react-redux
npm install --save-dev redux-devtools

# NPM + typescript
npm install @types/react-redux
`
        }
      </Code>
    </div>
  )
}
export default Redux