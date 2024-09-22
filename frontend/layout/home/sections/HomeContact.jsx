import Image from 'next/image'
import React from 'react'
import logoImg from '@/public/assests/images/Logo.svg';
import { BsArrowUpRight } from "react-icons/bs";

export default function HomeContact() {
  return (
    <div className='home__contact py-5'>
        <div className='container'>
            <div className='row '>
                <div className='col-12'>
                    <div className='home__contact__header'>
                        <div className='row align-items-center'>
                            <div className='col-2'>
                                <Image src={logoImg} alt='futrue-tech' className='logo__img img-fluid' />
                            </div>
                            <div className='col-10'>
                                <div className='home__contact__content d-flex flex-column align-items-start'>
                                    <p className='home__contact__tag c-wh mb-2'>Learn, Connect, and Innovate</p>
                                    <h2 className='home__contact__heading m-0 mb-4 c-wh'>Be Part of the Future Tech Revolution</h2>
                                    <p className='home__contact__sub-heading'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-12'>
                    <div className='home__contact__boxes border-grey-4 rounded bg-dark-1 p-3 px-4'>
                        <div className='row'>
                            <div className='col-md-4 px-2'>
                                <div className='home__contact__box px-4 py-4  bg-dark-2 border-dark-4 rounded overflow-hidden'>
                                    <div className='__top mb-4  d-flex align-items-center justify-content-between'>
                                        <p className='c-wh m-0 fw-medium'>Resource Access</p>
                                        <BsArrowUpRight className='__icon'/>
                                    </div>
                                    <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                                </div>
                            </div>
                            <div className='col-md-4 px-2'>
                                <div className='home__contact__box px-4 py-4  bg-dark-2 border-dark-4 rounded overflow-hidden'>
                                    <div className='__top mb-4  d-flex align-items-center justify-content-between'>
                                        <p className='c-wh m-0 fw-medium'>Resource Access</p>
                                        <BsArrowUpRight className='__icon'/>
                                    </div>
                                    <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                                </div>
                            </div>
                            <div className='col-md-4 px-2'>
                                <div className='home__contact__box px-4 py-4  bg-dark-2 border-dark-4 rounded overflow-hidden'>
                                    <div className='__top mb-4  d-flex align-items-center justify-content-between'>
                                        <p className='c-wh m-0 fw-medium'>Resource Access</p>
                                        <BsArrowUpRight className='__icon'/>
                                    </div>
                                    <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};