import SectionHead from '@/components/ui/sectionHead';

export default  function SkeletonTestimonials() {
  return (
    <div className="bg-dark-1">
        <SectionHead
            head="Real Words from Real Readers"
            href='/testimonials'
            content="View All Testimonials"
            link
            tag="What Our Readers Say"
        />
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12  br-b">
                    <div className="container">
                        <div className="row">
                            {Array.from({ length: 3 }).map((_, index) => (
                            <div className="col-md-4 br-r">
                                <div className="py-5 px-4">
                                    <div className="d-flex mb-5 placeholder-glow align-items-center justify-content-center column-gap-3" >
                                        <div style={{width: '60px', height: '60px', borderRadius: '50%'}} className="placeholder"></div>
                                        <div className="col-6 d-flex flex-column  column-gap-2 ">
                                            <div className="col-12 rounded placeholder mb-2"></div>
                                            <div className="col-9 rounded placeholder"></div>
                                        </div>
                                    </div>
                                    <div className="border-dark-4 rounded-10 bg-dark-2 p-3 placeholder-glow">
                                        <p className="col-12 placeholder rounded"></p>
                                        <p className="col-10 placeholder rounded"></p>
                                        <p className="col-11 placeholder rounded"></p>
                                        <p className="col-12 placeholder rounded"></p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-12  br-b">
                    <div className="container">
                        <div className="row">
                            {Array.from({ length: 3 }).map((_, index) => (
                            <div className="col-md-4 br-r">
                                <div className="py-5 px-4">
                                    <div className="d-flex mb-5 placeholder-glow align-items-center justify-content-center column-gap-3" >
                                        <div style={{width: '60px', height: '60px', borderRadius: '50%'}} className="placeholder"></div>
                                        <div className="col-6 d-flex flex-column  column-gap-2 ">
                                            <div className="col-12 rounded placeholder mb-2"></div>
                                            <div className="col-9 rounded placeholder"></div>
                                        </div>
                                    </div>
                                    <div className="border-dark-4 rounded-10 bg-dark-2 p-3 placeholder-glow">
                                        <p className="col-12 placeholder rounded"></p>
                                        <p className="col-10 placeholder rounded"></p>
                                        <p className="col-11 placeholder rounded"></p>
                                        <p className="col-12 placeholder rounded"></p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};