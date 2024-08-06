
import './eventNote.css'

export default function EventNote () {
	return (
		<div className="frontDate">
			<section id="dateLeft"> 
				<h1>4</h1>
				<p>декабрь</p>
				<p>четверг</p>
			</section>
			<section className="mid">	
				<h2><a href="1#">Frontend Developer</a></h2>
				<p>1 мая 11:00</p>
				<ul className="tags">
					<li>JavaScript</li>
					<li>Design</li>
					<li>jQuery</li>
					<li>Meteor</li>
					<li>Front-end</li>
					<li>nodeJS</li>
					<li>TypeSctipt</li>
					<li>promises</li>
					<li>printerLab</li>
				</ul>
				<section className="foter">
					<ul className="ulFoter">
						<li><h3>x</h3></li>
						<li><a href="">iCal</a></li>
						<li><a href="">Google</a></li>
						<li><a href="">Outlook</a></li>
					</ul>
				</section>
			</section>
		</div>
	)
}