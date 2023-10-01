import Hero from "../containers/Hero";
import Features from "../containers/Features";
import Navbar from "../containers/Navbar";

const Home = () => {
	return (
		<>
			<main>
				<Navbar />
				<Hero />
				<div className="h-10 bg-grey-100 mt-24 lg:mt-32 lg:h-12 mb-24 lg:mb-32"></div>
				<Features />
			</main>
		</>
	);
};

export default Home;
