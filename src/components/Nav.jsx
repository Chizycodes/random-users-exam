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
			console.log(error);
		}
	};
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow absolute right-0 left-0 z-10">
			<div className="flex items-center justify-between px-5 py-3 text-[black]">
				<Link to="/" className="text-[#1e75ff] font-bold text-[20px]">
					AltSchool Project
				</Link>
				<div className="flex items-center gap-5">
					<Link to="/error-boundary" className="hover:text-[#1e75ff]">
						Error Boundary
					</Link>

					{user?.displayName ? (
						<div className="flex items-center gap-5">
							<div className="relative">
								<div className="">
									<div
										className="w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer"
										id="dropdownDefault"
										data-dropdown-toggle="dropdown"
										onClick={() => setDropdown(!dropdown)}
									>
										<img src={user?.photoURL} alt="Profile photo" />
									</div>
								</div>

								{dropdown && (
									<div
										id="dropdown"
										className=" z-10 w-[100px] py-2 px-3 bg-white rounded divide-y divide-gray-100 shadow absolute right-0"
									>
										<ul className="py-1 text-sm text-[#333333]" aria-labelledby="dropdownDefault">
											<li className="py-1 hover:text-[#1e75ff]">
												<Link to="/users">Users</Link>
											</li>
											<li className="py-1 hover:text-[#1e75ff]">
												{' '}
												<button onClick={handleLogout}>Sign Out</button>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					) : (
						<Link
							to="/login"
							className="bg-[#1e75ff] text-white font-bold px-3 py-2 rounded hover:scale-105 transition delay-100 duration-300 ease-in-out"
						>
							Sign in
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
