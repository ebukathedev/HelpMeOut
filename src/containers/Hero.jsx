import heroImg1 from "../images/hero-img_1.png";
import heroImg2 from "../images/hero-img_2.png";
import heroImg3 from "../images/hero-img_3.png";
import arrowRight from "../images/arrow-right.svg";
import dottedSquare1 from "../images/dotted-square_1.svg";
import dottedSquare2 from "../images/dotted-square_2.svg";

const Hero = () => {
	return (
		<section className="lg:flex-1 px-4 md:px-8 xl:px-12 flex md:items-center">
			<div className="container mx-auto pt-8 flex flex-col space-y-20 md:space-y-0 md:flex-row">
				<div>
					<h1 className="font-sora font-bold text-grey-900 text-4xl sm:text-[44px] md:text-4xl">
						Show Them <br /> Don’t Just Tell
					</h1>
					<p className="text-black/75 font-inter font-normal text-base mt-3 max-w-md">
						Help your friends and loved ones by creating and sending
						videos on how to get things done on a website.
					</p>
					<a
						href="#"
						className="flex items-center w-fit text-white px-6 py-3 font-workSans font-medium bg-primary space-x-[10px] rounded-lg text-base mt-8"
					>
						<span>Install HelpMeOut</span>
						<div>
							<img src={arrowRight} alt="right arrow" />
						</div>
					</a>
				</div>
				<div className="relative">
					<div className="grid grid-cols-2 grid-rows-2 gap-3 max-w-md mx-auto">
						<div className="col-span-1">
							<img
								src={heroImg1}
								alt="hero image"
								className="block h-full w-full"
							/>
						</div>
						<div className="col-span-1 row-start-2">
							<img
								src={heroImg2}
								alt="hero image"
								className="block h-full w-full"
							/>
						</div>
						<div className="col-span-1 row-span-2">
							<img
								src={heroImg3}
								alt="hero image"
								className="block h-full w-full"
							/>
						</div>
					</div>
					<div className="absolute w-32 -top-6 -right-4 -z-10 sm:w-44 sm:-top-8">
						<img
							src={dottedSquare1}
							alt="dotted square"
							className=""
						/>
					</div>
					<div className="absolute w-32 -bottom-6 -left-4 -z-10 sm:w-44 sm:-bottom-8">
						<img
							src={dottedSquare2}
							alt="dotted square"
							className=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
