import { AiOutlineUnorderedList } from 'react-icons/ai';
import { setlayoutMobile, isActiveNav } from '@/store/slice/layout';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const toogleNav = () => {
    console.log('toogle nav')
    dispatch(setlayoutMobile(false));
  }
  return (
    <div id='header'>
      {/* <Link href="/">header</Link> */}
      <span className='toggleNav' onClick={toogleNav}><AiOutlineUnorderedList /></span>
    </div>
  )
}
export default Header