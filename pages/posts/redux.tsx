import Code from 'components/prism/Code'
const Redux = () => {
  return (
    <div>
      <div className='title'># Redux Core</div>
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