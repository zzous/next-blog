import Link from 'next/link';
import Code from 'components/prism/Code';

const React = () => {
  return (
    <div>
      <div className='title'>React</div>
      {/* <Code language='js'>
        {
          ``
        }
      </Code> */}
      
      <div className='title sub'>create-react-app</div>
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
  
      <div className='title sub'>craco</div>
      <p>
        CRA(create-react-app) 으로 프로젝트를 생성할 때 webpack 의 기본 설정들을 포함하고 있다.
        추가적으로 환경설정을 커스텀해야 할 경우가 많은데 CRA 의 환경 설정파일을 수정을 쉽게 커스텀하기 위해 등장한 것이 <Link href={'/posts/craco'}>craco(Create-react-app Configuration Override)</Link> 이다.
      </p>
    </div>
  )
}
export default React;