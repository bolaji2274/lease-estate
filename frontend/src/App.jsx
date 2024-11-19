import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<div className='text-[#404040] bg-white'>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/Login' element={<Login/>}/>
			</Routes>
		</div>
			
	);
}

export default App;
