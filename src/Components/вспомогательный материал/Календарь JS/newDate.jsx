
import "./style.css"
import "./app"
export default function NewDate () {
	return (
		<div class="container w-50 pt-5">
		<h1>Дата и время</h1>

		<div class="text-bg-light p-3 text-center">
			<h3 id="output">12:12:12</h3>
		

			<div class="d-flex mb-2" id="btndiv">
				<button class="btn btn-small btn-primary" id="full"></button>
				<button class="btn btn-small btn-success" id="date"></button>
				<button class="btn btn-small btn-danger" id="time"></button>
			</div>
		</div>
		</div>
	)
}