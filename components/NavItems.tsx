import { Link, NavLink, useLoaderData, useNavigate } from "react-router"
import { logoutUser } from "~/appwrite/auth";
import { sidebarItems } from "~/constants"
import { cn } from "~/lib/utils"
import { useNotification } from "~/lib/notification-context";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
    const user = useLoaderData();
	const navigate = useNavigate();
	const { showNotification } = useNotification();

	const handleLogout = async () => {
		try {
			await logoutUser();
			showNotification('Successfully signed out!', 'success');
			// Add a small delay to ensure the notification is visible before navigation
			setTimeout(() => {
				navigate('/sign-in');
			}, 1000);
		} catch (error) {
			showNotification('Error signing out. Please try again.', 'error');
		}
	}

	return (
		<section className="nav-items">
			<Link to="/" className="link-logo">
				<img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]" />
				<h1>Travel Agency</h1>
			</Link>

			<div className="container">
				<nav>
					{sidebarItems.filter(({ label }) => (label !== "All Users" || user?.status === "admin")).map(({ id, href, icon, label }) => (
						<NavLink to={href} key={id}>
							{({ isActive }: { isActive: boolean }) => (
								<div className={cn("group nav-item", {
									"bg-primary-100 !text-white" : isActive
								})} onClick={handleClick}>
									<img
										src={icon}
										alt={label}
										className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
									/>
									<div>{label}</div>
								</div>
							)}
						</NavLink>
					))}
				</nav>

				<footer className="nav-footer">
					<img src={user?.imageUrl || '/assets/images/michael.webp'} alt={user?.name || 'Guest'} referrerPolicy="no-referrer" />
					<article>
						<h2>{user?.name || "Guest"}</h2>
						<p>{user?.email}</p>
					</article>

					<button
						onClick={handleLogout}
						className="cursor-pointer"
					>
						<img 
							src="/assets/icons/logout.svg"
							alt="Logout"
							className="size-6"
						/>
					</button>
				</footer>
			</div>

		</section>
	)
}

export default NavItems