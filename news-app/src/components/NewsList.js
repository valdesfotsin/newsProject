import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems';
import Img from '../img/icons8-user-64 (2).png'


function NewsList() {

const [articles, setarticles] = useState([]);
const [ip, setIP] = useState('');

useEffect(() => {
	const getArticles= async ()=>{
		const resp = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9cb112b00a4baca5bad860723b0b80')
		console.log(resp)
		setarticles(resp.data.articles)
	}
	getArticles()
},[]);

// Localisation
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.country_name)
    }
    
    useEffect( () => {
        getData()
    }, [])

  return (
	<div className='container mt-4'>
		<div className='row'>
			<div className='col-md-3 m-2'>
				<div className='contianer card d-flex align-items-center ' style={{width: '18rem'}}>
					<div className='card-header text-center'>
						<h3> Info User</h3>
					</div>
					<img src={Img} alt='' height='50%' width='50%'/>
					<div class="card-body text-center">
						<p class="card-text">Localisation :{ip}</p>
						<p class="card-text">Name User</p>
					</div>
				</div>
			</div>
			<div className='col-md-8'>
			{articles.map(article=>{
				return(
					<NewsItems
					title={article.title}
					description={article.description}
					url={article.url}
					urlToImage={article.urlToImage}
					author={article.author}
					publishedAt={article.publishedAt}
					/>
				)
			})}
			</div>
			<div className='col-md-1'></div>
		</div>
	</div>
  )
}

export default NewsList