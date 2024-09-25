import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import '@/styles/layout/_footer.scss';

export default  function Footer() {
  return (
    <div className="footer__main bg-dark-1 pt-5 pb-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md col-6">
            <div className="footer__list">
              <p className="c-wh fw-medium mb-4 footer__list__heading">Home</p>
              <ul className="list-unstyled">
                <li className="footer__item">
                  <Link href='/features'>Features</Link>
                </li>
                <li className="footer__item">
                  <Link href='/'>Blogs</Link>
                </li>
                <li className="footer__item">
                  <Link href='/blogs'>Contact Us</Link>
                </li>
                <li className="footer__item">
                  <Link href='/resources'>Resources</Link>
                  <span className="__tag rounded">New</span>
                </li>
                <li className="footer__item">
                  <Link href='/testimonials'>Testimonials</Link>
                </li>
                <li className="footer__item">
                  <Link href='/newsletter'>Newsletter</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md col-6">
            <div className="footer__list">
              <p className="c-wh fw-medium mb-4 footer__list__heading">News</p>
              <ul className="list-unstyled">
                <li className="footer__item">
                  <Link href='/features'>Trending Stories</Link>
                </li>
                <li className="footer__item">
                  <Link href='/'>Featured Videos</Link>
                </li>
                <li className="footer__item">
                  <Link href='/blogs'>Technology</Link>
                </li>
                <li className="footer__item">
                  <Link href='/resources'>Health</Link>
                </li>
                <li className="footer__item">
                  <Link href='/testimonials'>Politics</Link>
                </li>
                <li className="footer__item">
                  <Link href='/newsletter'>Environment</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md col-6">
            <div className="footer__list">
              <p className="c-wh fw-medium mb-4 footer__list__heading">Blogs</p>
              <ul className="list-unstyled">
                <li className="footer__item">
                  <Link href='/features'>Quantum Computing</Link>
                </li>
                <li className="footer__item">
                  <Link href='/'>AI Ethics</Link>
                </li>
                <li className="footer__item">
                  <Link href='/blogs'>Space Exploration</Link>
                </li>
                <li className="footer__item">
                  <Link href='/resources'>Biotechnology</Link>
                  <span className="__tag rounded">New</span>
                </li>
                <li className="footer__item">
                  <Link href='/testimonials'>Renewable Energy</Link>
                </li>
                <li className="footer__item">
                  <Link href='/newsletter'>Biohacking</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md col-6">
            <div className="footer__list">
              <p className="c-wh fw-medium mb-4 footer__list__heading">Podcasts</p>
              <ul className="list-unstyled">
                <li className="footer__item">
                  <Link href='/features'>AI Revolution</Link>
                </li>
                <li className="footer__item">
                  <Link href='/'>TechTalk AI</Link>
                </li>
                <li className="footer__item">
                  <Link href='/resources'>AI Conversations</Link>
                  <span className="__tag rounded">New</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md col-6">
            <div className="footer__list __resources">
              <p className="c-wh fw-medium mb-4 footer__list__heading">Resources</p>
              <ul className="list-unstyled">
                <li className="footer__item">
                  <Link href='/features'>Whitepapers</Link>
                  <BsArrowUpRight className="__icon"/>
                </li>
                <li className="footer__item">
                  <Link href='/'>Ebooks</Link>
                  <BsArrowUpRight className="__icon"/>
                </li>
                <li className="footer__item">
                  <Link href='/blogs'>Reports</Link>
                  <BsArrowUpRight className="__icon"/>
                </li>
                <li className="footer__item">
                  <Link href='/resources'>Resources</Link>
                  <BsArrowUpRight className="__icon"/>
                </li>
                <li className="footer__item">
                  <Link href='/testimonials'>Research Papers</Link>
                  <BsArrowUpRight className="__icon"/>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 br-t mt-4">
            <div className="d-flex justify-content-center align-items-center my-2 ">
              Developed by: 
              <Link href='https://github.com/asemali2210' className="c-main m-3"> <BsGithub /> asemali </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}