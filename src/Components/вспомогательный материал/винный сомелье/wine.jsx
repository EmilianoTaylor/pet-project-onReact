


import './style.css'
export default function Wine () {
	return (
	<div className="mainDiv">
		<h2 className="header">Электронный сомелье</h2><br />
		<div className="vine">
		<div className="redWine">
		<p className="head"><strong>Бокал</strong>18 видов</p>
		{/* <p className="body"><imm src="Безымянный.png" alt="" /></p> */}
		<p className="body">Бокал для красного вина</p>
		</div>
		<div className="redWine" id="over">
			<p className="head"><strong>Тип</strong>24 типа</p>
			<ul className="list" name="elem" id='wineUl'>
				<li>Апперитивы</li>
				<li>Дижестивы</li>
				<li>Горячие</li>
				<li>Молочные</li>
				<li>Десертные</li>
				<li>Дейзи</li>
				<li>Джусы</li>
				<li>Соки</li>
				<li>Водка</li>
				<li>Фрэши</li>
				<li>Не доступен</li>
				<li>Не доступен</li>
	</ul>
		</div>
		<div className="redWine" id="over">
			<p className="head"><strong>Крепость</strong>6 типов</p>
			<ul className="list" id="wineUl">
				<li>Легкий до 10%</li>
				<li>Средний = 8 - 20%</li>
				<li>Как компот</li>
				<li>Крепкий = 30 - 40%</li>
				<li>Неадекватный = 70%</li>
			</ul>
		</div>
		<div className="redWine" id="over">
			<p className="head"><strong>Основа</strong>14 напитков</p>
			<ul className="list" id="wineUl">
				<li>Чача</li>
				<li>Водка</li>
				<li>Джин</li>
				<li>Виски</li>
				<li>Бренди</li>
				<li>Ликер</li>
				<li>Игристое</li>
				<li>Красное вино</li>
				<li>Белое вино</li>
				<li>Пивандропл</li>
				<li>Абсент</li>
				<li>Медовуха</li>
			</ul>
		</div>
		</div>
		<div className="vine">
			<div className="redWine" id="newOver">
				<p className="head"><strong>Украшения</strong>19 типов</p>
				<p><input type="checkbox" className="chIn" id="chIn1" /> <label className="lab" for="chIn1">Апельсин</label></p>
				<p><input type="checkbox" className="chIn" id="chIn2" /> <label className="lab" for="chIn2">Ветка мяты</label></p>
				<p><input type="checkbox" className="chIn" id="chIn3" /> <label className="lab" for="chIn3">Сливки</label></p>
				<p><input type="checkbox" className="chIn" id="chIn4" /> <label className="lab" for="chIn4">Виноград</label></p>
				<p><input type="checkbox" className="chIn" id="chIn5" /> <label className="lab" for="chIn5">Вишенка на сваях</label></p>
				<p><input type="checkbox" className="chIn" id="chIn6" /> <label className="lab" for="chIn6">доля мандарина</label></p>
				<p><input type="checkbox" className="chIn" id="chIn7" /> <label className="lab" for="chIn7">маринад</label></p>
				<p><input type="checkbox" className="chIn" id="chIn8" /> <label className="lab" for="chIn8">Кисть винограда</label></p>
				<p><input type="checkbox" className="chIn" id="chIn9" /> <label className="lab" for="chIn9">Свое</label></p>
				<p><input type="checkbox" className="chIn" id="chIn10" /> <label className="lab" for="chIn10">Баф</label></p>
			</div>
			</div>
	</div>
	)
}