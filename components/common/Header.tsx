import { AiOutlineUnorderedList } from 'react-icons/ai';
import { setlayoutMobile, isActiveNav } from '@/store/slice/layout';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const dispatch = useDispatch();
  const toogleNav = () => {
    dispatch(setlayoutMobile(!activeNav));
    setActiveNav(!activeNav)
  }
  return (
    <div id='header'>
      {/* <Link href="/">header</Link> */}
      <span className='toggleNav' onClick={toogleNav}><AiOutlineUnorderedList /></span>
    </div>
  )
}
export default Header