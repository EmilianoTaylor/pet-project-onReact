import { useState } from "react"
import Button from "../Button/button"
import Line from "../вспомогательный материал/перетекающая лининя CSS/line"
import './cssModelsPage.css'
import HideMenu from "../вспомогательный материал/Практика/menu.jsx"


export default function CssModelsPage () {

const [btnOne, setBtnOne] = useState(false)
const [btnTwo, setBtnTwo] = useState(false)


	function OpenCssList (n) {
		let projectPage = document.getElementById('projects')
		projectPage.classList.add('hide')
		let buttonBack = document.getElementById('buttonBack')
		buttonBack.classList.remove('hide')
		if (n == 1) {
			setBtnOne(true)
		} else if (n == 2) {
			setBtnTwo(true)
		}
	}

	function stepBack () {
		let projectPage = document.getElementById('projects')
		let buttonBack = document.getElementById('buttonBack')
		buttonBack.classList.add('hide')
		projectPage.classList.remove('hide')
		setBtnOne(false)
		setBtnTwo(false)
	}


	return (
		<div>
			<Button className="cssButton hide" onClick={stepBack} id="buttonBack">Назад</Button>
				<div className="projects" id="projects">
					<div className="project first">
						<h2>Плавная линия</h2>
						<Button className="btn-open" id="btnFirst" onClick={() => OpenCssList(1)}>Открыть</Button>
					</div>
					<div className="project second">
						<h2>Выпадающее меню</h2>
						<Button className="btn-open" id="btnSecond" onClick={() => OpenCssList(2)}>Открыть</Button>
					</div>
					<div className="project third">
						<h2>Скрыть/показать</h2>
						<Button className="btn-open" id="btnThird">Открыть</Button>
					</div>
					<div className="project fourth">
						<h2>Добавить в будущем</h2>
						<Button className="btn-open" id="btnFourth">Открыть</Button>
					</div>
				</div>
				{btnOne == true && <Line />}
				{btnTwo == true && <HideMenu />}
		</div>
	)
}