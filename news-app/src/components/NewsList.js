import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems';

function NewsList() {

const [articles, setarticles] = useState([]);

useEffect(() => {
	const getArticles= async ()=>{
		const resp = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9cb112b00a4baca5bad860723b0b80')
		console.log(resp)
		setarticles(resp.data.articles)
	}
	getArticles()
},[]);

  return (
	<div>
		{articles.map(article=>{
			return(
				<NewsItems
				title={article.title}
				description={article.description}
				url={article.url}
				urlToImage={article.urlToImage}
				/>
			)
		})}
	</div>
  )
}

export default NewsList