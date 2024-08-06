

import "./style.css"
export default function Notes () {
	return (
		<body class="bg-dark text-light">
	<div class="container w-50 pt-5">
		<h1>Заметки</h1>
		<input type="text" class="form-control mb-2" 	id="title" />

		<button class="btn btn-outline-info 2-100 mb-2" id="create">Добавить</button>

		<ul class="list-group list-group-flush" id="list">

		</ul>
	</div>
<script src="app.js"></script>
</body>
	)
}