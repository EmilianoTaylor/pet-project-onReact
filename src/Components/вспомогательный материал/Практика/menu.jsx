
import "./menu.css"
export default function HideMenu () {
	return (
		<div className="hideMenuDiv">
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link" href="#">Обычная ссылка</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Выпадающий список</a>
					<ul className="subnav">
						<li className="subnav-item">
							<a className="subnav-link" href="#">Ссылка</a>
						</li>
						<li className="subnav-item">
							<a className="subnav-link" href="#">Ссылка</a>
						</li>
					</ul>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Обычная Ссылка</a>
				</li>
			</ul>
		</div>
	)
}