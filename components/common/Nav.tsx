import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { isActiveNav } from '@/store/slice/layout';
import Link from 'next/link';
const Header = () => {
  return (
    <div id='nav' className={isActiveNav ? 'active' : ''}>
      <div className='search'>
        <input type='text' placeholder='search..' />
      </div>
      <div className='title'>POSTS <AiFillCaretUp /></div>
      <ul>
        <li><Link href='/posts/react'>react</Link></li>
        <li><Link href='/posts/redux'>redux</Link></li>
        <li><Link href='/posts/craco'>craco</Link></li>
        <li><Link href='/posts/router'>router</Link></li>
        <li><Link href='/posts/next'>Next.js</Link></li>
        <li><Link href='/posts/nuxt'>Nuxt.js</Link></li>
        <li><Link href='/posts/curriculum'>front-end</Link></li>
        {/* <li><Link href='/dependencies/prismjs'>prismjs code highlighter</Link></li> */}
      </ul>
      <div className='title'>SETTINGS <AiFillCaretUp /></div>
      <ul>
        <li><Link href='/settings/tsconfig'>tsconfig</Link></li>
        <li><Link href='/settings/craco'>craco</Link></li>
      </ul>
    </div>
  )
}
export default Header;