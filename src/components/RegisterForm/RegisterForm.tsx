import ConfirmButton from '../ui/ConfirmButton/ConfirmButton'
import DontHaveAccount from '../ui/DontHaveAccount/DontHaveAccount'
import PasswordField from '../ui/PasswordField/PasswordField'
import PersonalInfoForm from '../ui/PersonalInfoForm/PersonalInfoForm'
import styles from './RegisterForm.module.scss'

const RegisterForm: React.FC = () => {
	return (
		<div className={styles.root}>
			<form className={styles.registerForm}>
				<h3 className={styles.form__title}>Sign up</h3>
				<PersonalInfoForm isDashboardPage={false}/>
				<DontHaveAccount />
			</form>
		</div>
	)
}

export default RegisterForm
