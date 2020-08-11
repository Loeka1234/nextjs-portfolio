import SEO from "../components/SEO";
import Technologies from "../components/homePage/Technologies";
import Info from "../components/homePage/Info";

const iUse = [
	"html.svg",
	"css.svg",
	"javascript.svg",
	"typescript.svg",
	"react.svg",
	"nodejs.svg",
];

export default function Home() {
	return (
		<SEO title="Home">
			<Info />
			<Technologies
				directory="technologies/"
				images={iUse}
				heading="Technologies I use:"
			/>
		</SEO>
	);
}
