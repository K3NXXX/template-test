import { IoEyeSharp } from 'react-icons/io5'
import styles from "./PasswordField.module.scss"

const PasswordField: React.FC = () => {
	return (
		<div className={styles.password__row}>
			<input
				placeholder='Password (big and small letters, numbers. Min 10 symbols)'
				type='text'
			/>
			<IoEyeSharp size={24} className={styles.password__eye} />
		</div>
	)
}

export default PasswordField
