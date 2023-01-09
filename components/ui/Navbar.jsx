import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';
import {FaGlobe, FaHome} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import kit from '/public/assets/images/kit.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='flex justify-between items-center'>
      <img className='h-16' src="/assets/images/logo.svg" alt="" />
      <div className='hidden lg:flex flex-col gap-3 items-end'>
        <ul className='flex items-center gap-8'>
        {[
  { title: 'skip navigation', link: 'skip' },
  { title: 'Home', link: 'home' },
  { title: 'Plain Language', link: 'plain' },
  { title: 'Legals', link: 'legals' },
  { title: 'Privacy Policy', link: 'privacy' },
  { title: 'Accessibility', link: 'accessibility' },
  { title: 'Sitemap', link: 'sitemap' },
  { title: 'Intranet', link: 'intranet' },
  { title: 'KIT', link: 'kit',image:kit},
  { title: 'DE', link: 'de',icon:FaGlobe }
].map((item, index) =><li key={index}><Link className='flex items-center gap-2' href={item.link}>{item.icon&&<item.icon/>}{item.image&&<img className='w-4' src={item.image.src}/>}{item.title}</Link></li> )
  }
  <li><AiOutlineSearch/></li>
  </ul>
  <ul className='flex gap-6 items-center'>
    {
      [
        { title: 'KIT', link: 'kit' },
        { title: 'Topics', link: 'topics' },
        { title: 'Studies', link: 'studies' },
        { title: 'Research', link: 'research' },
        { title: 'Innovation', link: 'innovation' },
        { title: 'Career', link: 'career' }
      ].map((item, index) => <li key={index}><Link href={item.link}>{item.title}</Link></li>)
    }
    <li><FaHome/></li>
  </ul>
      </div>
      <div className='flex'>

      </div>
      </div>
    </Wrapper>
  )
}

export default Navbar