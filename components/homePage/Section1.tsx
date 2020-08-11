import styled from "styled-components";

import Button from "../reusable/Button";
import Link from "next/link";

import Bg from "../../public/svgs/bg.svg";

const Wrapper = styled.section`
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
	@media screen and (max-width: 500px) {
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.5rem;
        }
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
	@media screen and (max-width: 500px) {
		button {
			font-size: 1.3rem;
			margin: 0.5rem 1rem;
		}
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
			left: 0;
			transform: rotate(180deg) scale(1.1);
		}
		&:last-child {
			right: 0;
		}
	}
	@media screen and (max-width: 1100px) {
		svg:first-child {
			left: -150px;
		}
		svg:last-child {
			right: -150px;
		}
	}
	@media screen and (max-width: 600px) {
		svg:first-child {
			left: -200px;
		}
		svg:last-child {
			right: -200px;
		}
	}
`;

const Info: React.FC = () => {
	return (
		<Wrapper>
			<Header>Welcome to my website</Header>
			<Description>
				My name is Loeka Lievens. I study computer science in
				Oudenaarde. One of my hobbies is web development.
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
	);
};

export default Info;
