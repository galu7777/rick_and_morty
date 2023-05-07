import { useState } from 'react'
import validation from '../Validation/Validation';
import RM from './assets/RM.gif'
import './Form.css'

export default function Form({login}) {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    console.log(userData)
  }

  return (

    <div className='container-form'>
        <form onSubmit={handleSubmit} className='form'>               
            
            <div className='div-form'>
                <img src={RM} alt="" className='img-login'/>
                <div className='ctn-label'>
                  <label htmlFor="email" className='label'>Email: </label>
                </div>
                <input 
                  type="email" 
                  className='input' 
                  name='email' 
                  value={userData.email}
                  onChange={handleChange}
                  placeholder='Ingresa tu email'
                />
                {errors.email && <h5 style={{color: 'red', fontSize: '14px'}}>{errors.email}</h5>}
                <div className='ctn-label'>
                  <label htmlFor="password" className='label'>Password: </label>
                </div>
                <input 
                  type="text" 
                  className='input' 
                  name='password' 
                  value={userData.password}
                  onChange={handleChange}
                  placeholder='Ingresa tu contraseña'
                />
                {errors.password && <h5 style={{color: 'red', fontSize: '14px'}}>{errors.password}</h5>}
                <button className='btn'><span className='spn'>Submit</span><i></i></button>
            </div>
            
        </form>
    </div>
  )
}
