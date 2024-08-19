import { BsFillCreditCardFill } from 'react-icons/bs'
import styles from './Main.module.scss'

const Main: React.FC = () => {
	return (
		<div className={styles.content}>
			<p className={styles.greeting}>Welcome, Savannah</p>
			<div className={styles.balance__wrapper}>
				<div className={styles.balance}>
					<p>Your balance</p>
					<span>$6.930</span>
				</div>
				<BsFillCreditCardFill size={40} />
			</div>
		</div>
	)
}

export default Main
