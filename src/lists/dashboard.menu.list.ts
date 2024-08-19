import img1 from "../assets/dashboard/dahsboard-image.svg"
import img2 from "../assets/dashboard/dashboard-settings.svg"
import img3 from "../assets/dashboard/dashboard-any-page.svg"

interface DashboardMenuType {
	id: number
	image: string
	label: string
}

export const dashboardMenu: DashboardMenuType[] = [
	{
		id: 1,
		label: "Dashboard",
		image: img1
	},
	{
		id: 2,
		label: "Any page",
		image: img3
	},
	{
		id: 3,
		label: "Settings",
		image: img2
	}
]