import Button from '../Button/button'
import './header.css'
import Modal from './modalWindow'

function OpnModal () {
	document.getElementById('final').classList.add('open')
}

export default function Header ({active, onChange}) {
	return (
	<div>
		<ul className="list">
			<li className="listLi"><Button 
				className='headerBtn'
				isActive={active == 'main'}
				onClick={() => onChange('main')}
			>Главная страница</Button></li>
			<li className="listLi"><Button 
				className='headerBtn'
				isActive={active == 'project'}
				onClick={() => onChange('project')}
			>Проекты</Button></li>
			<li className="listLi"><Button 
				className='headerBtn'
				isActive={active == 'cssPage'}
				onClick={() => onChange('cssPage')}
			>CSS модели</Button></li>
			<li className="listLi"><Button id="del" className='headerBtn' onClick={() => alert('Не функционирует')}>Заметки</Button></li>
		</ul>
		<div>
			<Button className='personal' onClick={OpnModal}>Личный кабинет</Button>
		</div>
		<Modal />
	</div>
	)
}