import styles from './CheckEmail.module.scss'

const CheckEmail: React.FC = () => {
	return (
		<div className={styles.root}>
			<div>
				<h2>Sign up</h2>
				<p>
					To complete your registration check your email
					savannah.young@example.com and follow the link from the email
				</p>
			</div>
		</div>
	)
}
export default CheckEmail
