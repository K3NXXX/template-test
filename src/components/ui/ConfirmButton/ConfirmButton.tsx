import { FaCircleArrowRight } from 'react-icons/fa6'
import styles from './ConfirmButton.module.scss'

interface ConfirmButtonProps {
	title: string
	color: string
}
const ConfirmButton: React.FC<ConfirmButtonProps> = ({ title, color }) => {
	return (
		<button style={{background: color}} className={styles.confirmButton}>
			<p>{title}</p>
			<FaCircleArrowRight color='black' />
		</button>
	)
}

export default ConfirmButton
