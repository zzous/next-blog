import path from 'path';

import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link'
const Header = () => {
  // const fs = require('fs');
  // function getStaticProps() {
  //   let files = fs.readdirSync('pages');
  //   files = files.filter((file) => {
  //     if (file == '_app.js') return false;
  //     const stat = fs.lstatSync(file);
  //     return stat.isFile();
  //   });

  //   const pages = files.map((file) => {
  //     const link = path.parse(file).name;
  //     const name = link;
  //     return {
  //       name: name,
  //       link: link,
  //     };
  //   });

  //   return {
  //       props: {
  //           pages: pages,
  //       },
  //   };
  // }
  return (
    <div id='nav'>
      <div className='search'>
        <input type='text' placeholder='search..' />
      </div>
      <div className='title'>POSTS <AiFillCaretUp /></div>
      <ul>
        <li><Link href='/dependencies/prismjs'>prismjs code highlighter</Link></li>
        <li><Link href='/posts/redux'>redux</Link></li>
        <li><Link href='/posts/craco'>craco</Link></li>
      </ul>
      <div className='title'>SETTINGS <AiFillCaretUp /></div>
      <ul>
        <li><Link href='/settings/tsconfig'>tsconfig</Link></li>
        <li><Link href='/settings/craco'>craco</Link></li>
      </ul>
    </div>
  )
}
export default Header