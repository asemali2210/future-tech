import sun from '@/public/assests/images/sun-img.svg';
import Image from 'next/image';
import ForwordLink from './buttons/ForwordLink';

export default  function HomeHeader() {
  return (
    <div className="home__header bg-dark-1">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 left__col">
                    <div className='left__content h-100 d-flex flex-column justify-content-between'>
                        <div className="home__header__content">
                            <p className="content__top ">Your Journey to Tomorrow Begins Here</p>
                            <h3 className="header__heading c-wh">Explore the Frontiers of Artificial Intelligence</h3>
                            <p className="content__bottom">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                        </div>
                        <div className="text__boxes">
                            <div className='container'>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="text__box __first">
                                            <h3 className="text__box__number c-wh">300<span className="c-main">+</span></h3>
                                            <p className="text__box__content c-grey-1">Resources available</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text__box">
                                            <h3 className="text__box__number c-wh">12k<span className="c-main">+</span></h3>
                                            <p className="text__box__content c-grey-1">Total Downloads</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text__box __last">
                                            <h3 className="text__box__number c-wh">10k<span className="c-main">+</span></h3>
                                            <p className="text__box__content c-grey-1">Active Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 __right__col">
                    <div className="header__right__content">
                        <div className='top__img'>
                            <Image src={sun} alt="peapol"  className="img-fluid"></Image>
                        </div>
                        <div className='img__bottom__box '>
                            <Image src={people} alt="peapol" className="img-fluid mb-3"></Image>
                            <div className='header__right__text m-2'>
                                <p className='c-wh'>Explore 1000+ resources</p>
                                <p className='c-grey-3 mt-3 mb-3'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                                <ForwordLink href="/resources" content="Explore Resources" arrow radius/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};