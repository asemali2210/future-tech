import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import sub1 from '@/public/assests/images/sub-1.svg';
import sub2 from '@/public/assests/images/sub-2.svg';
import sub3 from '@/public/assests/images/sub-3.svg';
export default function SubHeader() {
  return (
    <div className='sub__header bg-dark-1'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4 p-0 border-col'>
                    <div className='sub__header__box'>
                        <div className='box__left__img'>
                            <Image alt='12' src={sub1} width={50} />
                        </div>
                        <div className='sub__img d-flex  justify-content-between'>
                            <div className='left'>
                                <p className='left__heading h-md'>
                                    Latest News Updates
                                </p>
                                <p className='left__sub__heading h-xs'>Stay Current</p>
                            </div>
                            <Link href='/' className="link__fill">
                                <BsArrowUpRight />
                            </Link>
                        </div>
                        <p className='h-r'>Over 1,000 articles published monthly</p>
                    </div>
                </div>
                <div className='col-md-4 p-0 border-col'>
                    <div className='sub__header__box'>
                        <div className='box__left__img'>
                            <Image alt='12' src={sub2} width={50} />
                        </div>
                        <div className='sub__img d-flex  justify-content-between'>
                            <div className='left'>
                                <p className='left__heading h-md'>
                                    Expert Contributors
                                </p>
                                <p className='left__sub__heading h-xs'>Trusted Insights</p>
                            </div>
                            <Link href='/' className="link__fill">
                                <BsArrowUpRight />
                            </Link>
                        </div>
                        <p className='h-r'>50+ renowned AI experts on our team</p>
                    </div>
                </div>
                <div className='col-md-4 p-0 border-col'>
                    <div className='sub__header__box'>
                        <div className='box__left__img'>
                            <Image alt='12' src={sub3} width={50} />
                        </div>
                        <div className='sub__img d-flex  justify-content-between'>
                            <div className='left'>
                                <p className='left__heading h-md'>
                                    Global Readership
                                </p>
                                <p className='left__sub__heading h-xs'>Worldwide Impact</p>
                            </div>
                            <Link href='/' className="link__fill">
                                <BsArrowUpRight />
                            </Link>
                        </div>
                        <p className='h-r'>2 million monthly readers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};