import { useState } from 'react'
import './regForm.css'
import RegistrationForm from './registrationForm'
import FormChanger from './formChanger'
import LoginForm from './loginForm'

export default function RegForm ({active, onChange}) {
	const [window, setWindow] = useState('registr')


	return (

		<div className="form" id="formScript">
			<FormChanger active={window} onChange={(current) => setWindow(current)}/>
				{window == "registr" && <RegistrationForm />}
				{window == "login" && <LoginForm />}
		</div>
	)
}