import { FaCircleArrowRight } from 'react-icons/fa6'
import styles from './DontHaveAccount.module.scss'

const DontHaveAccount: React.FC = () => {
	return (
		<div className={styles.dontHaveAccount}>
			<p>Don’t have account?</p>
			<button className={styles.signUpButton}>
				<p>Sign up</p>
				<FaCircleArrowRight color='black' />
			</button>
		</div>
	)
}

export default DontHaveAccount
