import Button from "../../Button/button"
import { useState } from "react"



export default function LoginForm () {
	const [content, setContent] = useState('')

	function handleClick (event) {
		setContent(event.target.value)
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
			</p>
		</form>
		<Button className="create" onClick={() => alert("не получится")}>Войти</Button>
		<ul className="relUlTwo">
			<li>Быстрый вход</li>
			<li>Надежная защита данных</li>
		</ul>
	</div>
	)
}