import ConfirmButton from '../ui/ConfirmButton/ConfirmButton'
import DontHaveAccount from '../ui/DontHaveAccount/DontHaveAccount'
import PasswordField from '../ui/PasswordField/PasswordField'
import styles from './ResetPassword.module.scss'

const ResetPassword: React.FC = () => {
	return (
		<div className={styles.root}>
			<form className={styles.resetPasswordForm}>
				<h2>Reset Password</h2>
				<div className={styles.content}>
					<PasswordField/>
					<ConfirmButton color="rgb(240, 56, 86)" title='Reset Password'/>
					<DontHaveAccount/>
				</div>
			</form>
		</div>
	)
}
export default ResetPassword
