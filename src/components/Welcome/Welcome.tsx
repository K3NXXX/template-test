import styles from "./Welcome.module.scss"
import accountVerified from "../../assets/account-verify.svg"

const Welcome = () => {
	return (
		<div className={styles.root}>
			<div>
				<h2>Welcome, Savannah</h2>
				<img src={accountVerified} alt="account verified" />
				<p>You have succesfully registration and will now be taken to your account</p>
			</div>
		</div>
	)
}

export default Welcome