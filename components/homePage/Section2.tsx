import styled from "styled-components";
import Technologies from "./Technologies";
import specialBox from "./../reusable/specialBox";
import Link from "next/link";

const iUse = [
    {
        fileName: "html.svg",
        desc: "HTML"
    },
    {
        fileName: "css.svg",
        desc: "CSS"
    },
    {
        fileName: "javascript.svg",
        desc: "Javascript"
    },
    {
        fileName: "typescript.svg",
        desc: "Typescript"
    },
    {
        fileName: "react.svg",
        desc: "React"
    },
    {
        fileName: "nodejs.svg",
        desc: "Nodejs"
    }
]

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Div = styled.div`
	width: 100%;
	max-width: 800px;
	display: flex;
	align-items: center;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const Description = styled.div`
	width: calc(100% - 250px);
	margin: 3rem;
	padding: 1rem;
	height: 210px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	h2 {
		margin: .5rem 0;
	}
	p {
		line-height: 1.3;
		margin: 0;
	}
    a {
        margin: .5rem 0;
        text-decoration: underline;
    }
	${specialBox};
    @media screen and (max-width: 800px) {
        height: auto;
        width: calc(100% - 6rem);
        margin-top: 0;
    }
`;

export interface Section2Props {}

const Section2: React.FC<Section2Props> = ({}) => {
	return (
		<Wrapper>
			<Div>
				<Technologies
					directory="technologies/"
					images={iUse}
					heading="Technologies I use:"
					fixedHeight={210}
				/>
				<Description>
					<h2>More info</h2>
					<p>
						I mainly use React (frontend) & Nodejs (backend) to
						build my websites. I use Typescript instead of
						javascript because Typescript has types which Javascript
						doesn't have. It helps make code easier to read and
						avoids errors that may become a debugging nightmare.
					</p>
					<Link href="/about">
						<a>Read More</a>
					</Link>
				</Description>
			</Div>
		</Wrapper>
	);
};

export default Section2;
