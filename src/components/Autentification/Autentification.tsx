import DontHaveAccount from '../ui/DontHaveAccount/DontHaveAccount'
import styles from './Autentification.module.scss'

const Autentification: React.FC = () => {
	return (
		<div className={styles.root}>
			<form className={styles.authForm}>
				<h2 className={styles.title}>Sign In - Autentification</h2>
				<p className={styles.description}>
					Enter code from autentification service to sign in email
				</p>
				<div className={styles.content}>
					{Array.from({ length: 6 }).map((_, index) => (
						<input key={index} className={styles.numbers} />
					))}
				</div>
				<DontHaveAccount/>
			</form>
		</div>
	)
}

export default Autentification
