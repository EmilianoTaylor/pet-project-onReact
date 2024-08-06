import Button from "../Button/button";
import './modalWindow.css'

function clsBtn () {
	document.getElementById('final').classList.remove('open')
}

export default function Modal () {
	return (
		<div className="changer" id="final">
			<div className="changerBox">
				<Button className='closeBtn' onClick={clsBtn}>x</Button>
				<label>Логин </label><input name="name" /> 
				<label>Пароль </label><input name="fam" />
				<label>Email </label><input type="email" />
				
				<Button type="submit" className="submit">Отправить</Button>
		</div>
	</div>
	)
}