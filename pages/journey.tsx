import TimeLine from "../components/TimeLine";
import SEO from "../components/SEO";

import { FcTimeline } from "react-icons/fc";
import { AiOutlineCode } from "react-icons/ai";

const timelineItems: TimelineItems = [
	{
		title: "The begin",
		date: "±2015",
		description:
			"I discovered programming at the age of 12. I didn't understand much of it because I was really young. So I didn't continue to learn to program but I knew that I wanted to do something with programming later. ",
		extraEl: <FcTimeline size={150} style={{ margin: "1rem" }} />,
	},
	{
		title: "School",
		date: "01/09/2019",
		description:
			"I went to the fifth high year. I started studying computer science in Oudenaarde. I became very interested in programming. It has become one of my hobbies. At school, we started to learn HTML, CSS, Javascript & C#.",
	},
	{
		title: "React",
		date: "16/03/2020",
		description:
			"During the corona lockdown, I had the chance to learn a lot of programming skills. I mainly started to learn React. React is a JavaScript library for building user interfaces. The main reason I love React is that it's component-based. ",
		extraEl: (
			<img src="images/react-logo.png" height={200} alt="React logo" />
		),
	},
	{
		title: "Learning",
		date: "01/08/2020",
		description:
			"I'm still learning a lot but I can already make very good websites. I'm always searching for new things I can learn and how I can make my websites better. Typescript is one of the examples, it is really nice to use with Nodejs or React. I'm constantly working on new projects (which you can see here on my portfolio website).",
		extraEl: (
			<img
				src="images/typescript-logo.png"
				height={150}
				alt="Typescript logo"
				style={{ margin: "2rem" }}
			/>
		),
	},
	{
		title: "Now",
		date: "Now",
		description: "I'm learning a lot and making a lot of projects.",
		extraEl: <AiOutlineCode size={150} style={{ margin: ".2rem" }} />,
	},
];

const Journey = () => {
	return (
		<SEO title="My Journey">
			<TimeLine items={timelineItems} />
		</SEO>
	);
};

export default Journey;
