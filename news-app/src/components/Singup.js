import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import singup from'../img/undraw_Sign_in_re_o58h.png'
import { useNavigate } from 'react-router-dom'

function Singup() {

	const navigate = useNavigate()


	const [error, seterror] = useState('');


	const loginError =(infoData)=> {
		if(infoData === 'Email format is invalid'){
			seterror('Adresse mail invalide')
		}else if(infoData === 'Cannot find user'){
			seterror('Utilisateur invalide')
		}else if(infoData === 'Incorrect password'){
			seterror('password invalide')
		}else{
			setTimeout(() => {
				navigate('/')
			}, 2000);
		}
		console.log(infoData)
	}	
	

	const [formData, setformData] = useState({
		firstname:'',
		secondname:'',
		birthday:'',
		email:'',
		password:''
	});
		
		

	const handleSubmit=(e)=>{
		e.preventDefault()
		fetch('http://localhost:5000/users',{
			method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
		})
		.then(res => res.json())
        .then(data => {
			console.log(data.user)
			console.log(formData)
			loginError(data)

		})
	}

	const handleChange=(e)=>{
		setformData({...formData, [e.currentTarget.name]: e.currentTarget.value})
	}


  return (
	<div className='container'>	
		<div className='row'>
			<div className='col-md-4 offset-md-2 pb-5'>
				<div className='row'>
					<form onSubmit={e => handleSubmit(e)}>
						<div className="mb-3">
							<h2 className='text-center mb-5 mt-5'>Sing up</h2>
						</div>
						<div className='mb-3'>
							{error && <div className='alert alert-danger'>{error}</div>}
						</div>
						<div className="mb-3">
							<label  class="form-label">First Name</label>
							<input type="text" value={formData.firstname} onChange={e => handleChange(e)} className="form-control" placeholder="frist name"   name='firstname' required/>
						</div>
						<div className="mb-3">
							<label  class="form-label">Second Name</label>
							<input type="text" value={formData.secondname} onChange={e => handleChange(e)} className="form-control" placeholder="second name"   name='secondname' />
						</div>
						<div className="mb-3">
							<label  class="form-label">Brith day</label>
							<input type="date" value={formData.birthday} onChange={e => handleChange(e)} className="form-control" placeholder="second name" name='birthday' />
						</div>
						<div className="mb-3">
							<label  class="form-label">Email</label>
							<input type="email" value={formData.email} onChange={e => handleChange(e)} className="form-control" placeholder="name@example.com" name='email' required/>
						</div>
						<div className="mb-3">
							<label class="form-label">Password</label>
							<input type="password" value={formData.password} onChange={e => handleChange(e)} className="form-control" placeholder="Password" name='password'/>
						</div>
						<div className="mb-3">
							<label class="form-label">Confirm Password</label>
							<input type="text" value={formData.password} onChange={e => handleChange(e)} className="form-control" placeholder="Confirm Password" required  name='confirmpassword'/>
						</div>
						<div className="mb-3 d-flex justify-content-center">
							<button className='btn btn-light' id='login' type='submit'> Register </button>
						</div>
					</form>
					<span className='text-center'>Already have any account ?
						<Link to='/' className='text-center btn btn-link'>Login</Link>
					</span>
				</div>
			</div>
			<div className='col-md-5' id='viewImgSingup'>
				<img src={singup} alt="" height='100%' width='100%'/>
			</div>
		</div>
	</div>
  )
}

export default Singup