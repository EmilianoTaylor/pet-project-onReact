import Header from "./Components/header/header";
import EventNote from "./Components/main-page/EventNote/eventNote";
import RegForm from "./Components/main-page/registatrionForm/regForm";
import SearchLesson from "./Components/main-page/searcher/searcher";
import ProjectPage from "./Components/projects-page/projectPage";
import CssModelsPage from "./Components/css-page/cssModelsPage";
import { useState } from "react";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom" ; 

function App () {
const [page, setPage] = useState('main')

	return (
		<>
			<Header active={page} onChange={(current) => setPage(current)}/>
			{page=='main' && (
				<> 
					<SearchLesson />
					<EventNote />
					<RegForm />
				</>
			)}

			{page=='project' && <ProjectPage />}

			{page=='cssPage' && <CssModelsPage />}
		</>
	)
}

export default App
