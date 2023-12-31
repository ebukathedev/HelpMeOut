const lineStyles = {
	all: "h-[3px] bg-primary rounded-full transition-all ease-in-out duration-300 absolute",
	line1: "w-9 top-0 origin-center",
	line2: "w-6 top-1/2 -translate-y-1/2 self-center",
	line3: "w-9 bottom-0 origin-center",
};
const hamburgerButtonStyles =
	"relative flex flex-col justify-between z-50 h-6 md:hidden transition-all ease-in-out duration-300 relative w-9 outline-none";
const HamburgerMenu = ({ setIsMenuOpen, isMenuOpen }) => {
	return (
		<button
			className={hamburgerButtonStyles}
			onClick={() => setIsMenuOpen(!isMenuOpen)}
		>
			<span
				className={`${lineStyles.all} ${lineStyles.line1} ${
					isMenuOpen && "top-1/2 -translate-y-1/2 rotate-45 w-8"
				} `}
			></span>
			<span
				className={`${lineStyles.all} ${lineStyles.line2}  ${
					isMenuOpen && "opacity-0"
				}`}
			></span>
			<span
				className={`${lineStyles.all} ${lineStyles.line3} ${
					isMenuOpen && "bottom-1/2 translate-y-1/2 -rotate-45 w-8"
				}`}
			></span>
		</button>
	);
};

export default HamburgerMenu;
