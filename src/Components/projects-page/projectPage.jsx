import Button from "../Button/button"
import Wine from "../вспомогательный материал/винный сомелье/wine"
import './projectPage.css' 
import { useState } from "react"


export default function ProjectPage () {
const [btnOne, setBtnOne] = useState (false)
const {content, setContent} = useState (false)

function OpenWine () {
	const webs = document.getElementById('projects')
	webs.remove()
	setBtnOne(true)
}

	return (
		<div id="toInner">
			<div className="projects" id="projects" value={content}>
			<div className="project first">
				<h2>Винный сомелье</h2>
				<label>Базовая форма для Web-макета, на которой присутствают следующие элементы: switcher, scrolling, text-gradient</label>
				<Button className="btnOpen" id="btnFirst" onClick={OpenWine}>Открыть</Button>
			</div>
			<div className="project second">
				<h2>Заметки</h2>
				<label>Практика, которая учит создавать и удалять элементы HTML, менять цвет иконки</label>
				<Button className="btnOpen" id="btnSecond">Открыть</Button>
			</div>
			<div className="project third">
				<h2>Календарь</h2>
				<label>Практика, которая учит взаимодействовать с Date() и многим другим методам работы с временем</label>
				<Button className="btnOpen" id="btnThird">Открыть</Button>
			</div>
			<div className="project fourth">
				<h2>Калькулятор</h2>
				<label>Практика, которая учит взаимодействовать с Number(), string, метод array и прочими математическими операциями</label>
				<Button className="btnOpen" id="btnFourth">Открыть</Button>
			</div>
			</div>
			{btnOne == true && <Wine />}
		</div>
	)
}
