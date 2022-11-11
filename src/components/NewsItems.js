import React from 'react'

const  NewsItems = (props) => {
 

   const {title, description, imgurl, url,publishedAt, Author, source} = props;
    
   return (
      <div>
        <div className="card" >
     
  
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"78%", zIndex:'1'}}>{source}</span>

  <img src={ imgurl} className="card-img-top" alt="..." />
  <div className="card body px-2" >
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text' ><small  className='text-danger px-3'>By {Author === null? "Unknown": Author} at {new Date (publishedAt).toGMTString()}</small></p>
    <a href={url}  className="btn btn-sm btn-secondary" style={{width:"90px"}}>Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItems
