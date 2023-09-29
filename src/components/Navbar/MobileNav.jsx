const MobileNav = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<div
			className={`md:hidden absolute right-4 p-3 w-44 bg-white flex flex-col rounded-md shadow-[0px_0px_10px_-1px] shadow-black/10 top-12 text-base space-y-3 transition-all ease-out duration-500 origin-top-right ${
				isMenuOpen ? "scale-1 opacity-100" : "scale-0 opacity-0"
			}`}
		>
			<div className="flex flex-col space-y-2 font-workSans font-medium">
				<a onClick={() => setIsMenuOpen(false)} href="#features">
					Features
				</a>
				<a onClick={() => setIsMenuOpen(false)} href="#how_it_works">
					How It Works
				</a>
			</div>
			<div className="h-[3px] bg-grey-100"></div>
			<a
				className="text-primary font-semibold font-sora"
				onClick={() => setIsMenuOpen(false)}
				href="#"
			>
				Get Started
			</a>
		</div>
	);
};

export default MobileNav;
