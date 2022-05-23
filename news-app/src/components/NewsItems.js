import React from 'react'
import authorImg from '../img/icons8-author-64.png'
function NewsItems({title, description, url, urlToImage ,author,publishedAt}) {
  return (
	<div className='container card mt-2' >
		<div className='row'>
			<div className='col-md-1 m-2 p-2'>
				<img src={authorImg} alt="img-author"  style={{borderRadius:'50%'}}/>
			</div>
			<div className='col-md-5'>
				<div className='row-md-5 mt-2' style={{fontWeight:'bold'}}>{author}</div>
				<div className='row-md-5 mt-1'>{publishedAt}</div>
			</div>
			
		</div>
		<div className='row'>
			<img src={urlToImage} alt={urlToImage} height='50%' width='50%' class="card-img" />
		</div>
		<div className='row card-body'>
			<h3 class="card-text"><a href={url}>{title}</a></h3>
			<p class="card-text">{description}</p>
		</div>
	</div>)
			
}

export default NewsItems