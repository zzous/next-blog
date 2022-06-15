import Link from 'next/link'
const Header = () => {
  return (
    <div id='nav'>
      <ul>
        <li><Link href='/settings/tsconfig'>tsconfig</Link></li>
        <li><Link href='/dependencies/prismjs'>prismjs code highlighter</Link></li>
        <li><Link href='/posts/redux'>redux</Link></li>
      </ul>
    </div>
  )
}
export default Header