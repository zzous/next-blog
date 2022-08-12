import Code from 'components/prism/Code'
import Link from 'next/link'

const NPM = () => {
  return (
    <div>
      <div className='title'># Creating NPM dependencies</div>

      <p>Creating an account on the website ( NPM 계정 만들기 ) - <Link href='https://www.npmjs.com/'><a target='_blank'>https://www.npmjs.com/</a></Link></p>
      <p>비활성 개인 모듈로 만들경우 private 계정으로 사용해야 한다. ( 유료 )</p>
      
      <p>terminal</p>
      <Code language='bash'>
        {
`npm init // -yes or -y [ default option settings ]`
        }
      </Code>
      <div className='title sub'>package.json ( default )</div>
      <Code language='json'>
        {
`{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`
        }
      </Code>
      <div className='title sub'>Login</div>
      <Code language='bash'>
        {
`npm login

// Username:
// Password:
// Email: (this IS public)`
        }
      </Code>
      <p>최초 로그인 시 Email 로 발송되는 OTP 코드를 입력해야 한다.</p>
      <Code language='bash'>
        {
`npm notice Please check your email for a one-time password (OTP)
Enter one-time password:`
        }
      </Code>

      <div className='title sub'>Publish</div>
      <Code language='bash'>
        {
`npm publish // --access public`
        }
      </Code>
      <p>제작된 package 를 npm registry 에 등록하기 위해 npm publish 명령을 실행한다.</p>
      <Code language='bash'>
        {
`npm ERR! code E403`
        }
      </Code>
      <p>[err!] code E403 에러 발생시 package name 이 중복 등록</p>
      <Code language='bash'>
        {
`npm info [package name]`
        }
      </Code>
      <p>npm info [package name] 명령으로 중복여부를 확인한다.</p>
    </div>
  )
}
export default NPM