import SectionHead from "@/components/ui/sectionHead";
import Image from "next/image";
import ebookIcon from '@/public/assests/images/ebook-icon.svg';
import whitepapersIcon from '@/public/assests/images/whitepapers-icon.svg';
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import people from '@/public/assests/images/header-people.png';
import ebookImg from '@/public/assests/images/ebook-img.png';
import whitepapersImg from '@/public/assests/images/whitepapersImg.png';
import { IoEyeSharp } from "react-icons/io5";
export default function HomeResources() {
  return (
    <div className="home__resources bg-dark-1">
            <SectionHead
            href="/" content="View All Resources" link
            tag="Your Gateway to In-Depth Information" head="Unlock Valuable Knowledge with FutureTech's Resources"
        />
        <div className="container-fluid">
            <div className="row">
              <div className="col-12 p-0 br-b">
                <div className="home__resource__container">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-4  br-r">
                          <div className="home__resource__left pe-4 py-4 p row-gap-4 d-flex flex-column">
                            <span className="__icon">
                              <Image src={ebookIcon} alt="ebook-icon" />
                            </span>
                            <h3 className="hd-md c-wh fw-bold">Ebooks</h3>
                            <p className="__discription c-grey-1">Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                            <Link href='/resources' className="bg-dark-2 text-center border-dark-4 rounded-10 p-2 __link">Download Ebooks Now <BsArrowUpRight/></Link>
                            <div className="d-flex align-items-center bg-dark-2 p-3 border-dark-4 rounded-10 gap-1">
                              <div className="mx-2"> 
                                <p className="text-nowrap">Downloaded By</p>
                                <p className="c-wh fw-semibold my-1">10k + Users</p>
                              </div>
                              <div>
                                <Image src={people} alt="users" className="img-fluid"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="home__resource__right py-4 ps-4  d-flex flex-column row-gap-4">
                            <div className="home__resource__top  d-flex align-items-center justify-content-between">
                              <p className="col-md-2 c-wh text-nowrap fw-bold">Variety of Topics</p>
                              <p className="col-md-9 c-grey-1">Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                            </div>
                            <div className ="home__resource__img ">
                              <Image src={ebookImg} alt="e-book" className="img-fluid" />
                            </div>
                            <div className="d-flex align-items-center  justify-content-between column-gap-1">
                              <div className="col-3 border-dark-4 rounded-4 p-3 bg-dark-2">
                                <p className="my-2">Total Ebooks</p>
                                <p className="c-wh fw-semibold">Over 100 ebooks</p>
                              </div>
                              <div className="col-8 d-flex align-items-center justify-content-between border-dark-4 rounded-4 p-3 bg-dark-2">
                                <div>
                                  <p className="my-2">Download Formats</p>
                                  <p className="c-wh fw-semibold">PDF format for access.</p>
                                </div>
                                <button className="bg-dark-2 btn border-dark-4 p-3 py-2  c-wh fw-semibold">Preview <IoEyeSharp className="c-main"/></button>
                              </div>
                            </div>
                            <div className="col-12 border-dark-4 rounded-4 p-3 bg-dark-2">
                              <p className="my-2">Average Author Expertise</p>
                              <p className="c-wh fw-semibold">Ebooks are authored by renowned experts with an average of 15 years of experience</p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 p-0 br-b">
                <div className="home__resource__container">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-4  br-r">
                          <div className="home__resource__left pe-4 py-4 p row-gap-4 d-flex flex-column">
                            <span className="__icon">
                              <Image src={whitepapersIcon} alt="ebook-icon" />
                            </span>
                            <h3 className="hd-md c-wh fw-bold">Whitepapers</h3>
                            <p className="__discription c-grey-1">Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                            <Link href='/resources' className="bg-dark-2 text-center border-dark-4 rounded-10 p-2 __link">Download Whitepapers Now <BsArrowUpRight/></Link>
                            <div className="d-flex align-items-center bg-dark-2 p-3 border-dark-4 rounded-10 gap-1">
                              <div className="mx-2"> 
                                <p className="text-nowrap">Downloaded By</p>
                                <p className="c-wh fw-semibold my-1">10k + Users</p>
                              </div>
                              <div>
                                <Image src={people} alt="users" className="img-fluid"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="home__resource__right py-4 ps-4  d-flex flex-column row-gap-4">
                            <div className="home__resource__top  d-flex align-items-center justify-content-between">
                              <p className="col-md-2 c-wh text-nowrap fw-bold">Topics Coverage</p>
                              <p className="col-md-9 c-grey-1">Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                            </div>
                            <div className ="home__resource__img ">
                              <Image src={whitepapersImg} alt="e-book" className="img-fluid" />
                            </div>
                            <div className="d-flex align-items-center  justify-content-between column-gap-2">
                              <div className="flex flex-fill me-3 border-dark-4 rounded-4 p-3 bg-dark-2">
                                <p className="mb-2">Total Whitepapers</p>
                                <p className="c-wh fw-semibold">Over 50 whitepapers</p>
                              </div>
                              <div className="col-8 d-flex align-items-center justify-content-between border-dark-4 rounded-4 p-3 bg-dark-2">
                                <div >
                                  <p className="mb-2">Download Formats</p>
                                  <p className="c-wh fw-semibold">PDF format for access.</p>
                                </div>
                                <button className="bg-dark-2 btn border-dark-4 p-3  c-wh fw-semibold">Preview <IoEyeSharp className="c-main"/></button>
                              </div>
                            </div>
                            <div className="col-12 border-dark-4 rounded-4 p-3 bg-dark-2">
                              <p className="mb-2">Average Author Expertise</p>
                              <p className="c-wh fw-semibold">Whitepapers are authored by subject matter experts with an average of 20 years of experience.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}