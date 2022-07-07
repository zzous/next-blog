import Code from 'components/prism/Code'

const Craco = () => {
  return (
    <div>
      <div className='title'># CRA (Create-React-App)</div>
      <p>CRA - React 를 시작하는데 있어 필요 개발 환경을 설정해주는 도구</p>
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
      <p>* npx - npm@5.2.0 부터 추가된 도구이다. npx(node package eXecute)는 패키지 실행의 의미</p>
      <p>Create-React-App 으로 프로젝트를 생성하게 되면 Webpack, Babel, ESLint 등 반드시 필요한 기본 설정을 신경쓰지 않고 기본 설정을 구성할 수 있다.</p>
      <p>하지만 추가적인 설정의 수정이 필요할 때가 있다. ( eject )</p>
      <div className='title sub'>eject</div>
      <Code language='bash'>
        {
`npm run eject
`
        }
      </Code>
      <p>creat-react-app 으로 시작된 프로젝트의 설정들은 기본적으로 숨김상태이다. <span className='pointBlock'>npm run eject</span> 를 실행하게되면 숨겨져 있던 webpack, babel 등의 설정파일과 dependencies 등을 볼 수 있다.</p>
      <p>* eject를 수행하게 되면 이전 상태로 돌릴 수 없음</p>
      <p>이러한 설정들을 Override하기 위해 craco 등장한다.</p>

      <div className='title'># Craco</div>
      <div>Craco(Create-React-App Configuration Override) : CRA에 config 설정을 Override 하기위한 패키지</div>
      <div><a href="https://github.com/gsoft-inc/craco" target='_blank'>https://github.com/gsoft-inc/craco</a></div>

      <div className='title sub'>install</div>
      <Code language='bash'>
        {
`# NPM
npm install @craco/craco

# Yarn
yarn add @craco/craco

# Sub Package
npm install craco-alias --save-dev
`
        }
      </Code>
      <div className='title sub'>package.json</div>
      <p></p>
      <Code language='js'>
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

      <div className='title sub'>carco.config.js</div>
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

      <div className='title sub'>filePath (절대경로설정)</div>
      <p>jsconfig.json</p>
      <Code language='js'>
        {
`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {  // 해당 부분의 경로를 설정한다
      "@/*": [
        "./src/*"
      ],
      "@constants": [
        "./src/constants"
      ]
    }
  },
  ...
}
`
        }
      </Code>
      
    </div>
  )
}
export default Craco