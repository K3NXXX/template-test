import avatarBig from "../../../assets/dashboard/avatar-big.png"
import PersonalInfoForm from '../../ui/PersonalInfoForm/PersonalInfoForm'
import styles from "./Settings.module.scss"

const Settings:React.FC = () => {
	return (
		<div className={styles.root}>
			<h2>Settings</h2>
			<div className={styles.avatar__settings}>
				<img src={avatarBig} alt="user avatar" />
				<button>Delete Photo</button>
				<button>Change Photo</button>
			</div>
			<div className={styles.info}>
				<p>Personal info</p>
				<PersonalInfoForm isDashboardPage={true}/>
			</div>
		</div>
	)
}
export default Settings