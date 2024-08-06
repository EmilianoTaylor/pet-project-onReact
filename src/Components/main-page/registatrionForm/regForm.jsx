import { useState } from 'react'
import './regForm.css'
import Button from '../../Button/button'

export default function RegForm () {
	const [content, setContent] = useState('')

	function handleClick (event) {
		setContent(event.target.value)
	}

	function ContStr () {
		if (content.length < 6) {
			return <label style={{color:'red'}} className='passwordWarning'>[!] пароль должен содержать не менее 6 символов</label>
		} else if (content.length < 10) {
			return <label className='passwordWarning'>[!] средняя длина пароля</label>
		} else {return <label className='passwordWarning'>[!] длинный пароль</label>}
	}





	return (
	<div className="form" id="formScript">
		<input type="button" value="Войти" className="formInp" /><input type="button" value="Зарегистрироваться" className="formInp" />
		<form className="reg">
			<p className="formP">
				Адрес электронной почты
				<input type="text" className="inp" />
			</p>
			<p className="formP">
				Пароль
				<input type="password" className="inp" id='content' value={content} onChange={handleClick}/>
				<ContStr />
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