import Code from 'components/prism/Code'

const Craco = () => {
  return (
    <div>
      <div className='title'># Nuxt.js</div>
      <div className='title sub'>install</div>
      <p>yarn, npx(npm v5.2+에 기본적으로 포함) 또는 npm(v6.1+) 필요</p>
      <Code language='bash'>
        {
`npx create-nuxt-app project-name
# yarn
yarn create nuxt-app project-name
# NPM
npm init nuxt-app project-name
`
        }
      </Code>

      <div className='title'># Routing</div>
      <p>Vue application 으로 작업 시 페이지를 구성할 때 <span className="box">router.js</span> 를 설정하고 모든 경로를 추가해줘야 한다. Nuxt는 페이지 디렉토리 내에 제공된 Vue 파일을 기반으로 자동으로 vue-router 구성을 생성한다.</p>

      <div className='title'># Directory</div>
      <div className='title sub'>Pages</div>
      <p>Pages 폴더 안에있는 모든 .vue 파일을 읽고 router 를 생성</p>
      <div className='title sub'>Components</div>
      <p>Nuxt 에서는 component 를 import 를 하지 않고 자동으로 .vue 파일을 가져올 수 있다.</p>
      <div className='title sub'>Assets</div>
      <p>styles, images, font 등 compile 되지 않는 파일들이 포함</p>
      <div className='title sub'>Static</div>
      <div className='title sub'>Layouts</div>
      <div className='title sub'>Middleware</div>
      <div className='title sub'>Plugins</div>
      <div className='title sub'>next.config.js file</div>
      <div className='title sub'>package.json file</div>

    </div>
  )
}
export default Craco