import SEO from "../components/SEO";
import Technologies from "../components/Technologies";
import styled from "styled-components";
import Button from "../components/reusable/Button";
import Link from "next/link";

import Bg from "../public/svgs/bg.svg";

const iUse = [
	"html.svg",
	"css.svg",
	"javascript.svg",
	"typescript.svg",
	"react.svg",
	"nodejs.svg",
];

const Wrapper = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: var(--bg-secondary);
	text-align: center;
	position: relative;
	* {
		z-index: 1;
	}
`;

const Header = styled.h1`
	font-weight: 500;
	position: relative;
	display: inline-block;
	margin: 1rem;
`;

const Description = styled.p`
	max-width: 500px;
	line-height: 1.2;
`;

const Buttons = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	justify-content: center;
	button {
		margin: 1rem 3rem;
	}
`;

const Background = styled.div`
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
	svg {
		position: absolute;
		top: 0;
		height: 100%;
		fill: var(--bg-secondary-darker);
		transform: scale(1.1);
		transition: fill 0.5s ease-in-out;
		&:first-child {
			right: 0;
		}
		&:last-child {
			left: 0;
			transform: rotate(180deg);
		}
	}
`;

export default function Home() {
	return (
		<SEO title="Home">
			<Wrapper>
				<Header>Welcome to my website</Header>
				<Description>
					My name is Loeka Lievens. I study computer science in
					Oudenaarde. One of my hobby's is web development.
				</Description>
				<Buttons>
					<Link href="/journey">
						<a>
							<Button primary>My journey</Button>
						</a>
					</Link>
					<Link href="/projects">
						<a>
							<Button primary>Projects</Button>
						</a>
					</Link>
					<Link href="/blog">
						<a>
							<Button primary>Blog</Button>
						</a>
					</Link>
				</Buttons>
				<Background>
					<Bg />
					<Bg />
				</Background>
			</Wrapper>
			<Technologies
				directory="technologies/"
				images={iUse}
				heading="Technologies I use:"
			/>
		</SEO>
	);
}
