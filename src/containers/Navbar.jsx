import HamburgerMenu from "../components/HamburgerMenu";
import logo from "../images/logo_dark.svg";

const Navbar = () => {
	return (
		<header className=" p-4 md:px-8 md:py-5 lg:pt-6 xl:px-12 border-2 border-b-grey-100">
			<nav className=" relative container mx-auto  md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<HamburgerMenu />
				</div>
				<div className="hidden md:block">
					<a className="p-2 px-3" href="#features">
						Features
					</a>
					<a className="p-2 px-3" href="#how_it_works">
						How it Works
					</a>
				</div>
				<a
					className="hidden md:inline-block p-2 px-3 text-primary font-bold"
					href="#"
				>
					Get Started
				</a>
				<div className="absolute right-4 py-2 px-3 w-36 bg-white flex flex-col rounded-md shadow-[0px_0px_10px_-1px] shadow-black/10 top-12 text-sm space-y-1">
					<div className="border-b-2 pb-2 border-grey-100 flex flex-col space-y-1">
						<a className="" href="#features">
							Features
						</a>
						<a className="" href="#how_it_works">
							How it Works
						</a>
					</div>
					<a className="text-primary font-bold" href="#">
						Get Started
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
