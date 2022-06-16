import Code from 'components/prism/Code'

const Craco = () => {
  return (
    <div>
      <div className='title'># Craco</div>
      <div>Craco(Create-React-App Configuration Override) : CRA에 config 설정을 Override 하기위한 패키지</div>
      <div><a href="https://github.com/gsoft-inc/craco" target='_blank'>https://github.com/gsoft-inc/craco</a></div>
      <div className='title'>install</div>
      <Code language='bash'>
        {
`# NPM
npm install @craco/craco --save

# Yarn
yarn add @craco/craco

# Sub Package
npm install craco-alias --save-dev
`
        }
      </Code>
      <div className='title'>package.json</div>
      <p></p>
      <Code language='bash'>
        {
`"scripts": {  
	"start": "craco start",  
	"build": "craco build",  
	"test": "craco test",  
	"eject": "craco eject"  
}
`
        }
      </Code>

      <div className='title'>carco.config.js</div>
      <Code language='js'>
        {
`const CracoAlias = require('craco-alias');

module.exports = {
  devServer: {
    compress: true,
    port: 8080,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: '.'
      }
    }
  ]
};
`
        }
      </Code>
    </div>
  )
}
export default Craco