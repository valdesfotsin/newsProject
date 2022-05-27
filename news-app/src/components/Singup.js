import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import singup from'../img/undraw_Sign_in_re_o58h.png'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'

function Singup() {

	const navigate = useNavigate()

	// useState check
	const [msgEmailForm, setmsgEmailForm] = useState('')
	const [msgPwdForm, setmsgPwdForm] = useState('')
	const [msgPwdConfirm, setmsgPwdConfirm] = useState('')
	const [submitOk, setsubmitOk] = useState(false)
	const [emailOk, setemailOk] = useState(false)
	const [passwordOk, setpasswordOk] = useState(false)
	const [pwdConfirmOk, setpwdConfirmOk] = useState(false)
	const [formData, setformData] = useState({
		firstname:'',
		secondname:'',
		birthday:'',
		email:'',
		password:''
	});
		
	//checkMail 
	const checkEmail=e=>{
		const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
		const email = e.target.value
		if(expressionReguliere.test(email)) {
		  setmsgEmailForm(null) 
		  setemailOk(true)
		} else {
		  setmsgEmailForm("Votre email doit être au format xxxxxx@xxxx.xxx")
		  setemailOk(false)
		}
		handleChange (e)
	}

	// checkPassword
	const checkPassword = e => {
		const password = e.target.value 
		if (validator.isStrongPassword(password, {
		  minLength: 8, minLowerCase: 1, minUpperCase: 1,
		  minnumbers: 1, minSymbols: 1
		})) {
		  setmsgPwdForm(null)
		  setpasswordOk(true)
		} else {
		  setmsgPwdForm('Votre mot de passe doit avoir au moins 8 caractères, une majuscule, une minuscule et un symbole')
		  setpasswordOk(false)
		}
		handleChange (e)
	  }

	//   checkPassewordConfirm
	const checkConfirmPwd = e => {
		const confimPwd = e.target.value
		if ((formData.password !== null) && (formData.password !== confimPwd)) {
		  setmsgPwdConfirm('Le mot de passe ne correspond pas')
		  setpwdConfirmOk(false)
		} else {
		  setmsgPwdConfirm(null)
		  setpwdConfirmOk(true)
		}
	  }

	//   check
	const signUpErrorMsg = infosLogin => {
		console.log(infosLogin);
		if (infosLogin === 'Email already exists') {
		  setemailOk(false)
		  setmsgEmailForm('Cet email est déja utilisée, veuillez la changer')
		} 
	  }
	
	  const handleSubmit = e => {
		e.preventDefault()
		if (passwordOk && emailOk && pwdConfirmOk) {
		  fetch('http://localhost:5000/users', {
				method: 'POST',
				headers: {'Content-Type' : 'application/json'},
				body: JSON.stringify(formData)
			})
			.then(res => res.json())
			.then(data => signUpErrorMsg(data))
		setsubmitOk(true)
		}
		console.log(submitOk);
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
							<h2 className='text-center mb-5 mt-5'>Register</h2>
						</div>

						<div className="mb-3">
							<label  class="form-label">First Name</label>
							<input 
							type="text" 
							value={formData.firstname} 
							onChange={handleChange} 
							className="form-control" 
							placeholder="frist name"   
							name='firstname' 
							required/>
						</div>

						<div className="mb-3">
							<label  class="form-label">Second Name</label>
							<input 
							type="text" 
							value={formData.secondname} 
							onChange={handleChange} 
							className="form-control" 
							placeholder="second name"   
							name='secondname' />
						</div>

						<div className="mb-3">
							<label  class="form-label">Brith day</label>
							<input 
							type="date" 
							value={formData.birthday} 
							onChange={handleChange} 
							className="form-control" 
							placeholder="second name" 
							name='birthday' />
						</div>
						
						<div className="mb-3">
							<label  class="form-label">Email</label>
							<input 
							type="email" 
							// value={formData.email} 
							// onChange={e => handleChange(e)} 
							onChange={checkEmail}
							className="form-control" 
							placeholder="name@example.com" 
							required
							name='email' />
						</div>

						{ msgEmailForm && <div className="alert alert-warning" role="alert"> {msgEmailForm}</div> }
						
						<div className="mb-3">
							<label class="form-label">Password</label>
							<input 
							type="password" 
							// value={formData.password} 
							// onChange={e => handleChange(e)} 
							onChange={checkPassword}
							className="form-control" 
							placeholder="Password" 
							name='password'
							required/>
						</div>

						{ msgPwdForm && <div className="alert alert-warning" role="alert"> {msgPwdForm}</div> }
						
						<div className="mb-3">
							<label class="form-label">Confirm Password</label>
							<input 
							type="text" 
							// value={formData.password} 
							// onChange={e => handleChange(e)} 
							onChange={checkConfirmPwd}
							className="form-control" 
							placeholder="Confirm Password" 
							required  
							name='confirmpassword'/>
						</div>
						
						{ msgPwdConfirm && <div className="alert alert-warning" role="alert"> {msgPwdConfirm}</div> }
						
						<div className="mb-3 d-flex justify-content-center">
							<button 
							className='btn btn-light' 
							id='login' 
							type='submit'> 
							Sign Up
							</button>
						</div>
					</form>
					{submitOk && navigate('/')}
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