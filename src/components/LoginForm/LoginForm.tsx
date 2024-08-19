import { FaCircleArrowRight } from 'react-icons/fa6'
import styles from './LoginForm.module.scss'
import PasswordField from '../ui/PasswordField/PasswordField'
import ConfirmButton from '../ui/ConfirmButton/ConfirmButton'
import DontHaveAccount from '../ui/DontHaveAccount/DontHaveAccount'

const LoginForm: React.FC = () => {
	return (
		<div className={styles.root}>
			<form className={styles.loginForm}>
				<h3 className={styles.form__title}>Sign in</h3>
				<div className={styles.content}>
					<input placeholder='E-mail' type='text' />
					<PasswordField/>
					<button className={styles.forgotPasswordButton}>
						I don’t remember password
					</button>
					<ConfirmButton color='rgb(217, 192, 196)' title='Sign in'/>
				</div>
				<DontHaveAccount/>
			</form>
		</div>
	)
}

export default LoginForm
