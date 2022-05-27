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
		const resp = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=f26537e779a74c1abeab17e7fd39b71f`)
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
		
			
			<div className='col-md-11'>
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
		</div>
	</div>
	</>
  )
}

export default NewsSearch