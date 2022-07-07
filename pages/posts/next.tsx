import Code from 'components/prism/Code'

const Craco = () => {
  return (
    <div>
      <div className='title'># Next.js</div>
      <div className='title sub'>setup</div>
      <Code language='bash'>
        {
`npx create-next-app --typescript
# yarn
yarn create next-app --typescript
`
        }
      </Code>

      <div className='title sub'>Manual Setup</div>
      <Code language='js'>
        {
`# NPM
npm install next react react-dom
# yarn
yarn add next react react-dom
`
        }
      </Code>
      <div className='title sub'>package.json</div>
      <Code language='js'>
        {
`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
`
        }
      </Code>

      <div className='title'># Pages</div>
      <div className='title'># Layout</div>
      <div className='title'># Route</div>
    </div>
  )
}
export default Craco