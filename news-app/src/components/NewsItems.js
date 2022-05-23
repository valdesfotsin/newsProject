import React from 'react'

function NewsItems({title, description, url, urlToImage}) {
  return (
	<div className='container'>
		<div>
			<img src={urlToImage} alt={urlToImage} height='50%' width='50%' />
		</div>
		<div>
			<h3><a href={url}>{title}</a></h3>
		</div>
		<div>
			<p>{description}</p>
		</div>
	</div>
  )
}

export default NewsItems