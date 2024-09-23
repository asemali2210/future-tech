import ForwordLink from "../buttons/ForwordLink";
import '@/styles/components/UI/sectionHead.scss';
export default  function SectionHead({head,tag, link,content,href }) {
  return (
    <div className="section__head bg-dark-2 ">
        <div className="container">
            <div className="row align-items-center row-gap-3">
                <div className="col-md-8">
                    <div className="left_heading">
                        <p className="top__tag d-inline-block">{tag}</p>
                        <h3 className="h-xlg c-wh">
                            {head}
                        </h3>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-md-end">
                    <div className="right__link">
                        {link? <ForwordLink href={href} content={content} arrow radius /> : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};