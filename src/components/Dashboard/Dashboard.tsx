import { BsFillCreditCardFill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import logo from '../../assets/dashboard/dashboard-logo.svg'
import avatar from '../../assets/dashboard/user-avatar.png'
import { dashboardMenu } from '../../lists/dashboard.menu.list'
import styles from './Dashboard.module.scss'
import Settings from './Settings/Settings'
import { useState } from 'react'
import Main from './Main/Main'

const Dashboard: React.FC = () => {
	const [section, setSection] = useState("Dashboard")


	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<aside>
					<ul className={styles.menu}>
						{dashboardMenu.map(item => (
							<li
							onClick={() => setSection(item.label)}
							key={item.id}>
								<img src={item.image} alt='dashboard memu image' />
								<p>{item.label}</p>
							</li>
						))}
					</ul>
					<img src={logo} alt='logo' />
				</aside>
				<main>
					<header>
						<p className={styles.username}>Savannah Richards</p>
						<img src={avatar} alt='user avatar' />
						<IoMdArrowDropdown size={20} />
					</header>
					{section === "Dashboard" && <Main/>}
					{section === "Settings" && <Settings/>}
				
				</main>
			</div>
		</div>
	)
}
export default Dashboard
