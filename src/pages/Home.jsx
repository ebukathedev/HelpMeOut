import Hero from "../containers/Hero";
import Navbar from "../containers/Navbar";

const Home = () => {
	return (
		<>
			<main>
				<section className="flex flex-col h-screen">
					<Navbar />
					<Hero />
				</section>
			</main>
		</>
	);
};

export default Home;
