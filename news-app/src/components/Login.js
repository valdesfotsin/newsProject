import React,{ useState} from 'react'
import login from '../img/undraw_secure_login_pdn4.png'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

	const navigate = useNavigate();
	
	const [error, seterror] = useState('');


	const loginError =(infoData)=> {
		if(infoData === 'Email format is invalid'){
			seterror('Adresse mail invalide')
		}else if(infoData === 'Cannot find user'){
			seterror('Utilisateur invalide')
		}else if(infoData === 'Incorrect password'){
			seterror('password invalide')
		}else{
			navigate('home')
		}
		console.log(infoData)
	}

	const [formData, setformData] = useState({
		email:'',
		password:''
	});

	const handleSubmit= (e)=> {
		e.preventDefault()
		  fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify(formData)
		})
		.then(res => res.json())
		.then(data =>{
			console.log(data)
			console.log(formData)
			loginError(data)
			
		})
		
	}

    const handleChange=(e)=> {
        setformData({...formData, [e.target.name] : e.target.value})
    }

return (
	<div className='container'>
		<div className='row' id='viewLogin'>
			<div className='col-md-5 offset-md-1'>
				<img src={login} alt="" height='100%' width='100%'/>
			</div>
			<div className='col-md-4 '>
				<div className='row'>
					<form onSubmit={e => handleSubmit(e)}>
						<div className="mb-3">
							<h2 className='text-center mb-5 mt-5'>Login</h2>
						</div>
						<div className='mb-3'>
							{error && <div className='alert alert-danger'>{error}</div>}
						</div>
						<div className="mb-3">
							<label  class="form-label">Email</label>
							<input type="email" className="form-control" placeholder="name@example.com" value={formData.email} onChange={e => handleChange(e)} name='email' required/>
						</div>
						<div className="mb-3">
							<label class="form-label">Password</label>
							<input type="password" className="form-control" placeholder="Password" value={formData.password} onChange={e => handleChange(e)} name='password' required/>
						</div>
						<div className="mb-3 d-flex justify-content-center">
							<button className='btn btn-light' id='login' > Login </button>
						</div>
					</form>
					<span className='text-center btn btn-link'>Forgot your password ?</span>
					<span className='text-center'>Already have any account ?
						<Link to= 'Singup' className='text-center btn btn-link'>Sign Up </Link>
					</span>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login