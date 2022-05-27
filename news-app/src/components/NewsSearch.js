import axios from 'axios';
import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems';
import { useParams } from 'react-router-dom';



function NewsSearch({text,setflag}) {
	const [results, setresults] = useState([]);
	const [Nbrresults, setNbrresults] = useState([]);
	
	const {tex} = useParams()



	// recherche
	const getSearch= async()=>{
		const resp = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=cc9cb112b00a4baca5bad860723b0b80`)
		console.log(resp)
		console.log(resp.data.totalResults)
		setresults(resp.data.articles)
		setNbrresults(resp.data.totalResults)
	}
	useEffect( () => {
        getSearch()
    }, [text])

  return (
	<>
	
	<div className='container mt-4' id='infoUser'>

		<div className='row'>
			<div className='col-md-3 m-2'>
				{/* <div className='contianer card d-flex align-items-center ' style={{width: '18rem'}}>
					<div className='card-header text-center'>
						<h3> Info User</h3>
					</div>
					<img src={Img} alt='' height='50%' width='50%'/>
					<div class="card-body text-center">
						<p class="card-text">Localisation :{ip}</p>
						<p class="card-text">Name User</p>
					</div>
				</div> */}
			</div>
			
			<div className='col-md-8'>
				<h3>{Nbrresults} results </h3>
			{results.map(result=>{
				return(
					<NewsItems
					title={result.title}
					description={result.description}
					url={result.url}
					urlToImage={result.urlToImage}
					author={result.author}
					publishedAt={result.publishedAt}
					/>
				)
			})}
			</div>
			<div className='col-md-1'></div>
		</div>
	</div>
	</>
  )
}

export default NewsSearch