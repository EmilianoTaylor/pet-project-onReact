import Button from "../../Button/button"
import { useState } from "react"
import './regForm.css'


export default function RegistrationForm () {
	const [content, setContent] = useState('')
	const [contentRepeat, setContentRepeat] = useState('')

	function handleClick (event) {
		setContent(event.target.value)
	}

	function handleClickTwo (event) {
		setContentRepeat(event.target.value)
	}

	function PassLength () {
		if (content.length < 6) {
			return <label style={{color:'red'}} className='passwordWarning'>[!] пароль должен содержать не менее 6 символов</label>
		} else if (content.length < 10) {
			return <label className='passwordWarning'>[!] средняя длина пароля</label>
		} else {return <label className='passwordWarning'>[!] длинный пароль</label>}
	}

	function SamePassword () {
		if (content != contentRepeat) {
			return <label style={{color:'red'}} className='passwordWarning'>[!] пароли не совападают</label>
		} else {
			return <label style={{visibility:'hidden'}}>not visible</label>
		}
	}

	return (
	<div>
		<form className="reg">
			<p className="formP">
				Адрес электронной почты
				<input type="text" className="inp" />
			</p>
			<p className="formP">
				Пароль
				<input type="password" className="inp" id='content' value={content} onChange={handleClick}/>
				<PassLength />
			</p>
			<p className="formP">
				Повторите пароль
				<input type="password" className="inp" id='contentTwo' value={contentRepeat} onChange={handleClickTwo}/>
				<SamePassword />
			</p>
		</form>
		<p className='placeInline'>
			<input type="checkbox" name=""/> 
			<label>Я хочу получать рассылку с эксклюзивными предложениями</label>
		</p>
		<Button className="create" onClick={() => alert("не получится")}>Создать мой профиль</Button>
		<p id="finisher">Создавая аккаунт, вы соглашаетесь в нашими <a href="11">Правилами и условиями</a> и <a href="123">Положением о конфидециальности</a></p>
		<ul className="relUl">
			Быстро, бесплатно и надежно
			<li>Вносите изменения в бронирования</li>
			<li>Настраивайте рассылку предложений</li>
			<li>Выигрывайте время</li>
		</ul>
	</div>
	)
}