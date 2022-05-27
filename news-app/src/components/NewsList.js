import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems';
import Img from '../img/icons8-user-64 (2).png'
import { BsGeoAlt, BsGeoFill ,BsPersonCircle} from "react-icons/bs";


function NewsList() {

const [articles, setarticles] = useState([]);
const [ip, setIP] = useState('');
const [city, setcity] = useState('');

useEffect(() => {
	const getArticles= async ()=>{
		const resp = await axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=cc9cb112b00a4baca5bad860723b0b80')
		// console.log(resp.data.articles)
		setarticles(resp.data.articles)
	}
	getArticles()
},[]);

// Localisation
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.country_name)
		setcity(res.data.city)
    }
    useEffect( () => {
        getData()
    }, [])

  return (
	<div className='container mt-4'>
		<div className='row'>
			<div className='col-md-3 mt-2' id='infoUser'>
				<div className='contianer card d-flex align-items-center ' style={{width: '15rem'}}>
					<div className='card-header text-center'>
						<h4>Informations</h4>
					</div>
					<div class="card-body text-center">
						<BsGeoFill color='rgb(249,168,38)' size={25}/><p class="card-text">{ip},{city}</p>
						<BsPersonCircle color='rgb(249,168,38)' size={25}/> <p class="card-text">Name User</p>
					</div>
				</div>
			</div>
			<div className='col-md-9'>
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