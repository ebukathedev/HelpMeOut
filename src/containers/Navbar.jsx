import HamburgerMenu from "../components/HamburgerMenu";
import logo from "../images/logo_dark.svg";

const Navbar = () => {
	return (
		<header className="p-4 md:px-8 md:py-5 lg:pt-6 xl:px-12 border-2 border-b-grey-100">
			<nav className="container mx-auto bg-red-500 md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<HamburgerMenu />
				</div>

				<a href="#">Get Started</a>
				<div>
					<a href="#features">Features</a>
					<a href="#how_it_works">How it Works</a>
				</div>
				<div>

				</div>
			</nav>
		</header>
	);
};

export default Navbar;
