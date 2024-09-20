'use client';
import logo  from '@/public/assests/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { HiBars3BottomLeft } from "react-icons/hi2";
export default  function Navbar() {
  const currPath = usePathname();
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    navOpen? setNavOpen(false) : setNavOpen(true)
    console.log(navOpen)
  }
  return (
    <>
      <div className='bg-dark-1'>
            <div className='navbar__main-top text-center'>
              <Link href='/contact' className='text-center f-inter'>
                  Subscribe to our Newsletter For New & latest Blogs and Resources 
                  <BsArrowUpRight className='__link-icon c-main ms-2'/>
              </Link>
            </div>
      </div>
      <div className="navbar__main ">
        <div className="container">
          <div className='row align-items-center'>
            <div className="col-md-4 col-6">
              <div className="navbar__logo">
                <Image src={logo}
                  alt="future-tch"
                  className="img-fluid"
                  />
              </div>
            </div>
            <div className={`col-6 d-flex justify-content-end d-md-none `}>
              <div className='toggle__navbar' onClick={toggleNav}>
                <HiBars3BottomLeft />
              </div>
            </div>
            <div className={`col-md-8 menu__mob ${navOpen ? `show__nav` : ``}`} >
              <div className='navabar__links'>
                <ul className='navbar__items d-flex list-unstyled'>
                  <li  className={currPath == '/' ? "navbar__item --active" : 'navbar__item'} >
                    <Link href='/'>
                      Home
                    </Link>
                  </li> 
                  <li  className={currPath == '/news' ? "navbar__item --active" : 'navbar__item'} >
                    <Link href='/news'>
                      News
                    </Link>
                  </li>
                  <li className={currPath == '/podcasts' ? "navbar__item --active" : 'navbar__item'}>
                    <Link href='/podcasts'>
                      Podcasts
                    </Link>
                  </li>
                  <li className={currPath == '/resources' ? "navbar__item --active" : 'navbar__item'}>
                    <Link href='/resources'>
                    resources
                    </Link>
                  </li>
                </ul>
                <button className='--btn-primary'>
                  <Link href='/contact' className='font-weight-700'>
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}