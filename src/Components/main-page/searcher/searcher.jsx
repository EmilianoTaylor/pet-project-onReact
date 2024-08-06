import './searcher.css'
import Button from '../../Button/button'

export default function SearchLesson () {
	return (
	<div className="searcher">
		<h2>Искать уроки</h2>
		<select>
			<option> [ENG] Английский to [RU] Русский</option>
		</select>
		<select>
			<option>Все категории:</option>
			<option>Работа</option>
			<option>Школа и университет</option>
			<option>Путешествия</option>
			<option>Самоучитель</option>
			<option>Увлечения</option>
		</select>
		<input type="text" name="" id="searcherInp" />
		<Button className='searcherBtn'>Поиск</Button>
	</div>
	)
}
