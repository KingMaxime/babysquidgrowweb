import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Rollup from './components/Rollup';
import ScrollToTop from "./components/ScrollTop";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Information from "./pages/informations";
import Team from "./pages/Team";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return loading ? (
		<Spinner />
	) : (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='informations' element={<Information />} />
				<Route path='team' element={<Team />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
			{/* <Rollup /> */}
		</BrowserRouter>
	);
}

export default App;
