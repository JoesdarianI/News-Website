import React, {useState,useEffect} from 'react'
import "./News.css"
import Search from './Search'

const News=()=>{
  const [news,setNews] = useState([])
  const [term,setTerm] = useState('Covid-19')
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () =>{
      try{
        const res = await fetch(`http://api.mediastack.com/v1/news?access_key=3d863ca8c2cc8394ed89433ec2cd2cc0&languages=en&keywords=${term}`)
        const news = await res.json()
        
        setNews(news.data)
        setIsLoading(false)
      }catch(error){
        console.error(error)
      }
    }
    fetchNews()
  }, [term])

  return (
    <>
    <div className="show-news"> 
      <div className="overlay pc-5">
        <h1 className="mb-4 font-thiner text-center text-5xl header">News About {term}</h1>
      <Search searchText={(text)=>setTerm(text)}/>
      </div>
    </div>

    {isLoading ? (<h1 className="text-center mt-20 font-bold text-8xl">Loading...</h1>) :(
          <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
          {news.map((news) =>{
            const {author,category,country,description,image,language,published_at,source,title,url} = news
            return (
              <news key={0} className="lg:w-9/12 lg-mx:auto">
                <h2 className="font-bold text-2xl mb-5">{title}</h2>
                <h4>Category : {category}</h4>
                <p >{description}</p>
                <a href={url} target="_blank">Link</a>
                <br/>
                <img src={image} alt="news-image"></img>
                <ul className="my-4">
                  <li className="news-detail"><span className="font-bold">Author: </span>{author}</li>
                  <li className="news-detail"><span className="font-bold">Source: </span>{source}</li>
                  <li className="news-detail">{published_at}</li>
                </ul>
              
               
    
              </news>
            )
          })}
        </section>
    )}

    </>

  )
}

export default News