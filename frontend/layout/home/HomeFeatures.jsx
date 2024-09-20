import SectionHead from "@/components/ui/sectionHead";
import Image from "next/image";
import featureImg1 from '@/public/assests/images/feature-img-1.svg';
import featureImg2 from '@/public/assests/images/feature-img-2.svg';
export default function HomeFeatures() {
  return (
    <div className="home__features bg-dark-1">
        <SectionHead tag="Unlock the Power of" head="FutureTech Features"/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 br-b">
            <div className="feature__topic">
              <div className="container">
              <div className="row ">
                <div className="col-md-4 br-r p-0 m-0 d-flex align-items-center ">
                  <div className="feature__left__heading py-5 px-2">
                    <div className="heading__img">
                      <Image 
                      src={featureImg1}
                      alt="featureImg"
                      className="img-fluid mb-5"
                      />
                    </div>
                    <h3 className="feature__heading h-md c-wh">
                      Future Technology Blog
                    </h3>
                    <p className="text-sm">
                      Stay informed with our blog section dedicated to future technology.
                    </p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="feature__right__boxes py-5 px-3">
                    <div className="row ">
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2">
                          <h3 className="hd-sm c-wh">Quantity</h3>
                          <p className="feature__body text-sm">
                            Over 1,000 articles on emerging tech trends and breakthroughs.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Variety</h3>
                          <p className="feature__body text-sm">
                            Articles cover fields like AI, robotics, biotechnology, and more.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Frequency</h3>
                          <p className="feature__body text-sm">
                            Fresh content added daily to keep you up to date.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Authoritative</h3>
                          <p className="feature__body text-sm">
                            Written by our team of tech experts and industry professionals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-12 br-b">
            <div className="feature__topic">
              <div className="container">
              <div className="row ">
                <div className="col-md-4 br-r p-0 m-0 d-flex align-items-center ">
                  <div className="feature__left__heading py-5 px-2">
                    <div className="heading__img">
                      <Image 
                      src={featureImg2}
                      alt="featureImg"
                      className="img-fluid mb-5"
                      />
                    </div>
                    <h3 className="feature__heading h-md c-wh">
                      Research Insights Blogs
                    </h3>
                    <p className="text-sm">
                      Dive deep into future technology concepts with our research section.
                    </p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="feature__right__boxes py-5 px-3">
                    <div className="row ">
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2">
                          <h3 className="hd-sm c-wh">Depth</h3>
                          <p className="feature__body text-sm">
                            500+ research articles for in-depth understanding.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Graphics</h3>
                          <p className="feature__body text-sm">
                            Visual aids and infographics to enhance comprehension.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Trends</h3>
                          <p className="feature__body text-sm">
                            Explore emerging trends in future technology research.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature__box bg-dark-2" >
                          <h3 className="hd-sm c-wh">Contributors</h3>
                          <p className="feature__body text-sm">
                            Contributions from tech researchers and academics.
                          </p>
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
      </div>
    </div>
  )
}