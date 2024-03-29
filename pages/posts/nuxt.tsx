import Code from 'components/prism/Code'
import Link from 'next/link'

import { BsInfoCircle } from 'react-icons/bs'

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
      <p><img src="/images/directory.jpg" alt="directory" /></p>
      
      <div className='title sub'>Pages</div>
      <p>Pages 폴더 안에있는 모든 .vue 파일을 읽고 router 를 생성</p>
      <div className='title sub'>Components</div>
      <p>Nuxt 에서는 component 를 import 를 하지 않고 자동으로 .vue 파일을 가져올 수 있다.</p>
      <Code language='js'>
        {
`// nuxt.config.js
export default {
  components: true
}
`
        }
      </Code>
      <p>components 폴더에 중첩된 구조라면 directory 구조와 파일명을 기반으로 구성된다.</p>
      <Code language='js'>
        {
`// directory
components/
  base/
    foo/
      CustomButton.vue
 
// useCase
<BaseFooCustomButton />`
        }
      </Code>
      <p>nuxt.config.js 파일에 dir 을 추가하여 directory 구조를 유지하면서 으로 사용 할 수 있다</p>
      <Code language='js'>
        {
`// nuxt.config.js
// components: true
components: {
  dirs: [
    '~/components',
    '~/components/base/foo'
  ]
}`
        }
      </Code>
      <div className='title sub'>Assets</div>
      <p>styles, images, font 등 compile 되지 않는 파일들이 포함</p>
      <div className='title sub'>Static</div>
      <p>정적 파일을 포함하는 디렉토리로 루트에 직접 매핑되며 ( /static/robots.txt == http://localhost:8080/robots.txt 로 매핑 ) 변경되지 않을 가능성이 높은 파일을 포함한다.</p>
      <div className='title sub'>Layouts</div>
      <p>layout 구성</p>
      <p><BsInfoCircle /> 추가 설정 없이 이름을 바꿀수 없음</p>
      <p>layouts/default.vue</p>
      <Code language='js'>
        {
`<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
`
        }
      </Code>
      <p>Custom Layout</p>
      <Code language='js'>
        {
`// layouts/blog.vue
<template>
<div>
  <div>My blog navigation bar here</div>
  <Nuxt />
</div>
</template>

// pages/posts.vue
<script>
export default {
  layout: 'blog',
  // OR
  layout (context) {
    return 'blog'
  }
}
</script>
`
        }
      </Code>
      <p>[code] <Link href='https://nuxtjs.org/docs/directory-structure/layouts'><a target='_blank'>https://nuxtjs.org/docs/directory-structure/layouts</a></Link></p>
      <div className='title sub'>Middleware</div>
      <div className='title sub'>Plugins</div>
      <div className='title sub'>nuxt.config.js file</div>
      <div className='title sub'>package.json file</div>
      
      <div className='title'># Context and helpers</div>
      <p>기본적으로 제공되는 context keys</p>
      <Code language='js'>
        {
`function (context) { // Could be asyncData, nuxtServerInit, ...
  // Always available
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
    $config
  } = context

  // Only available on the Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }

  // Only available on the Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}

// [code] https://nuxtjs.org/docs/concepts/context-helpers
`
        }
      </Code>

      <div className='title sub'>Refreshing page data</div>
      <Code language='js'>
        {
`<template>
<div>
  <div>{{ content }}</div>
  <button @click="refresh">Refresh</button>
</div>
</template>

<script>
export default {
  asyncData() {
    return { content: 'Created at: ' + new Date() }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
}
</script>

// [code] https://nuxtjs.org/docs/concepts/context-helpers
`
        }
      </Code>
      <div className='title sub'>Controlling the loading bar</div>
      <Code language='js'>
        {
`export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}

// [code] https://nuxtjs.org/docs/concepts/context-helpers
`
        }
      </Code>

      
    </div>
  )
}
export default Craco