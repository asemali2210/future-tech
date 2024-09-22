
export default function SkeletonBlog() {
  return (
    <div className="card-text placeholder-glow  bg-dark-1">
        <div className="col-12 p-0 br-b">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-12 p-0 br-b">
                            <div className="container">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div  className="blog__container py-5 " key={index}>
                                    <div className="row placeholder-glow ">
                                        <div className="col-md-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="col-2 placeholder" 
                                                    style={{width: `60px`, height: '60px', borderRadius: '50%'}}>
                                                </div>
                                                <div className="auth__data placeholder-glow col-9">
                                                    <h2 className="col-12 placeholder rounded"></h2>
                                                    <p className="col-7 placeholder rounded"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 d-flex row-gap-3 flex-column gap-2">
                                            <div className="col-4 placeholder rounded"></div>
                                            <div className="col-6 placeholder rounded"></div>
                                            <div className="col-10 placeholder rounded"></div>
                                        </div> 
                                        <div className="col-md-2 align-self-center placeholder rounded" style={{height: '60px'}}>
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
    </div>
  )
}