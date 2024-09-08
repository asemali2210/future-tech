import SectionHead from "@/components/ui/sectionHead";


export default function HomeBlogs({articles = []}) {
   
    return (
    <div className="home__blogs">
        <SectionHead 
        tag="A Knowledge Treasure Trove" head="Explore FutureTech's In-Depth Blog Posts" link 
        href="/blog" content="View all content"
      />
        <div className="container">
            <div className="row">
                {
                    articles.map(article => (
                        <div className="col-12">
                            <div className="home__blogs__article">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="home__blogs__article__auth d-flex">
                                            <div className="aith__img">
                                                <img src={article.urlToImage} alt={article.author} width={60}/>
                                            </div>
                                            <div className="auth__data">
                                                <h2 className="hd-md c-wh">{article.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    </div>
  )
};