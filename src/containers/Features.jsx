import recording from "../images/recording.svg";
import share from "../images/share.svg";
import revisit from "../images/revisit.svg";
import videoFeatures from "../images/video_features.png";
import content from "../content";

const { features } = content;

const Features = () => {
	return (
		<section className="px-4 md:px-8 xl:px-12">
			<div>
				<h2>Features</h2>
				<p>Key Highlights of Our Extension</p>
			</div>
			<div>
				<ul>
					{features.map((feature) => (
						<li key={feature.id}>
							<div>
								<img src={feature.icon} alt="feature icon" />
							</div>
							<div className="text-center flex flex-col">
								<h3 className="font-bold font-sora text-3xl">
									{feature.title}
								</h3>
								<p>{feature.description}</p>
							</div>
						</li>
					))}
				</ul>
				<div>
					<img src={videoFeatures} alt="video features" />
				</div>
			</div>
		</section>
	);
};

export default Features;
