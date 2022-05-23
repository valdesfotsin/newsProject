import React from 'react'
import NewsList from './NewsList'


function Home() {
  return (
	<div className='container-fluid '>
		<header id='header' >
			<div className='row p-3 '>
				<div className='col-md-4'><h3 style={{color:'#fff'}}> News APP </h3></div>
				<div className='col-md-4'>
					<input type="text" class="form-control " placeholder="Search"/>
				</div>
			</div>
		</header> 
		<main>
			<NewsList/>
		</main>
	</div>
  )
}

export default Home