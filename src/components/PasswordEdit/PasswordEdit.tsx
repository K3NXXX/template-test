import styles from "./PasswordEdit.module.scss"
import accountVerified from "../../assets/account-verify.svg"

const PasswordEdit = () => {
	return (
		<div className={styles.root}>
			<div>
				<h2>Password succesfully edit</h2>
				<img src={accountVerified} alt="account verified" />
				<p>You have succesfully edit password and will now be taken to your account</p>
			</div>
		</div>
	)
}

export default PasswordEdit