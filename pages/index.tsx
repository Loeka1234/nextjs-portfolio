import SEO from "../components/SEO";
import Section1 from "../components/homePage/Section1";
import Section2 from "../components/homePage/Section2";

export default function Home() {
	return (
		<SEO title="Home">
			<Section1 />
			<Section2 />
		</SEO>
	);
}
