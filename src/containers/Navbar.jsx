import { useState } from "react";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
import MobileNav from "../components/Navbar/MobileNav";
import logo from "../images/logo_dark.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className=" p-4 md:px-8 md:py-[18px] xl:px-12 border-2 border-b-grey-100 lg:py-[17px] lg:border-[3px]">
			<nav className=" relative container mx-auto  md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<HamburgerMenu
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</div>
				<div className="hidden md:block space-x-4 text-base font-workSans font-medium">
					<a
						className="p-2 px-3 hover:bg-grey-100 rounded-md transition-colors"
						href="#features"
					>
						Features
					</a>
					<a
						className="p-2 px-3 hover:bg-grey-100 rounded-md transition-colors"
						href="#how_it_works"
					>
						How It Works
					</a>
				</div>
				<a
					className="hidden md:inline-block p-2 px-3 text-primary font-semibold text-sora text-lg hover:bg-grey-100 rounded-md transition-colors"
					href="#"
				>
					Get Started
				</a>
				<MobileNav
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
