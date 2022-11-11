import React, {useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




 const News = (props)  =>  {
  
  const capitalizedFirstLetter = (string) => {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
  }
 document.title = `NewsRig - ${capitalizedFirstLetter(props.category)}`
 
 

   
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const newsUpdated = async() => {
 props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8fe404e4384e48908ac8297981298332&page=${page + 1}&pagesize=${props.pageSize}`
    setLoading( true )
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
 props.setProgress(100)
  }

  useEffect(() => {
    newsUpdated();
  }, [])
  
  


  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8fe404e4384e48908ac8297981298332&page=${page +1}&pagesize=${props.pageSize}`
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
  setLoading(false)
  }


    const { headcolor } = props;

    return (
      <>
        <h1 className="text-center" style={{ color: `${headcolor}`, margin: '85px 0px' }}>NewsRig - Latest {capitalizedFirstLetter(props.category)} News</h1>
        {loading &&  <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
          <div className="row" style={{marginLeft:'20px'}}>
            {!loading && articles.map((element) => {
              return <div className="col-md-4 my-2 px-1" key={element.title}>
                <NewsItems title={element.title} Author={element.author} source={element.source.name} publishedAt={element.publishedAt} description={element.description} imgurl={element.urlToImage === null ? "https://image.cnbcfm.com/api/v1/image/107103597-1660524902501-gettyimages-1242429119-AFP_32G94U4.jpeg?v=1660524792&w=740&h=416" : element.urlToImage} url={element.url} />
               </div>
                 })}
           </div>
           </div>
            </InfiniteScroll>
  
    </>
       
    )
  }


News.defaultProps = {
  category: "general",
  country: "us",
  pageSize: 10

}
News.propTypes = {
  category: propTypes.string,
  country: propTypes.string,
  pageSize: propTypes.number
}

export default News;