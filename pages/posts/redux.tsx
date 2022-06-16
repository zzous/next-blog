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
        <div className='title'>slice</div>
        <p>action + reducer → slice</p>
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