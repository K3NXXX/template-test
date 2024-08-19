import { Route, Routes } from 'react-router-dom'
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import Autentification from './components/Autentification/Autentification'
import ResetPassword from './components/ResetPassword/ResetPassword'
import CheckEmail from './components/CheckEmail/CheckEmail'
import Welcome from './components/Welcome/Welcome'
import PasswordEdit from './components/PasswordEdit/PasswordEdit'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
	return (
		<div className='App'>
			<Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/welcome' element={<Welcome />} />
				<Route path='/register' element={<RegisterForm />} />
        <Route path='/check-email' element={<CheckEmail />} />
        <Route path='/sign-in-auth' element={<Autentification />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/password-edited' element={<PasswordEdit />} />
        <Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
