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

    </div>
  )
}
export default Craco