import ConfirmButton from '../ConfirmButton/ConfirmButton'
import PasswordField from '../PasswordField/PasswordField'
import { FaPencilAlt } from "react-icons/fa";
import styles from './PersonalInfoForm.module.scss'

interface PersonalInfoFormProps {
	isDashboardPage: boolean
}
const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
	isDashboardPage,
}) => {
	return (
		<div className={styles.content}>
			<div className={styles.name__row}>
				<input placeholder='First name' type='text' />
				<input placeholder='Last name' type='text' />
			</div>
			<div className={styles.email__row}>
				<input placeholder='E-mail' type='text' />
				<input placeholder='Username' type='text' />
			</div>
			<div className={styles.adress__row}>
				<input placeholder='Address' type='text' />
				<input placeholder='Date of birth (mm.dd.yy)' type='text' />
			</div>
			<PasswordField />
			{isDashboardPage ? (
				<button className={styles.editButton}>
					<p className={styles.editButton__text}>Edit personal info</p>
					<FaPencilAlt size={20} />
				</button>
			) : (
				<ConfirmButton color='rgb(217, 192, 196)' title='Registration' />
			)}
		</div>
	)
}

export default PersonalInfoForm
