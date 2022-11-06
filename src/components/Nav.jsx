import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Nav = () => {
	const { user, logOut } = UserAuth();
	const [dropdown, setDropdown] = useState(false);
	const handleLogout = async () => {
		try {
			await logOut();
		} catch (error) {
		}
	};
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 rounded shadow absolute right-0 left-0 z-10">
			<div className="flex items-center justify-between px-5 py-3 text-[#333333]">
				<Link to="/" className="text-blue_primary font-bold text-[20px]">
					<img src="/logo.svg" alt="logo" className="h-[60px]" />
				</Link>
				<div className="flex items-center gap-3 md:gap-5">
					{user?.displayName ? (
						<div className="flex items-center gap-5">
							<div className="relative">
								<div className="flex items-center cursor-pointer" onClick={() => setDropdown(!dropdown)}>
									<img src="/drop-down.svg" alt="drop down icon" className="w-[30px]" />
									<div
										className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-blue_primary"
										id="dropdownDefault"
										data-dropdown-toggle="dropdown"
									>
										<img src={user?.photoURL || '/person.svg'} alt="user" className="w-full h-full rounded-full" />
									</div>
								</div>

								{dropdown && (
									<div
										id="dropdown"
										className="z-10 w-[150px] py-2 px-3 bg-white rounded shadow-inner absolute right-0"
									>
										<ul className="py-1 text-sm text-[#333333]" aria-labelledby="dropdownDefault">
											<li className="py-1 hover:text-blue_primary cursor-pointer">
												<Link to="/users">Users</Link>
											</li>
											<li className="py-1 hover:text-blue_primary cursor-pointer">
												<Link to="/error-boundary" className="hover:text-blue_primary">
													Error Boundary
												</Link>
											</li>
											<li className="py-1 hover:text-blue_primary cursor-pointer">
												<div onClick={handleLogout}>Sign Out</div>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					) : (
						<Link
							to="/login"
							className="bg-blue_primary text-white text-sm font-medium px-3 py-2 rounded hover:scale-105 transition delay-100 duration-300 ease-in-out"
						>
							Sign In
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
