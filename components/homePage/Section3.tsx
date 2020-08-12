import styled from "styled-components";

import WWW from "../../public/svgs/www.svg";
import Link from "next/link";

const Wrapper = styled.section`
	width: 100%;
	height: 350px;
	background: linear-gradient(
		90deg,
		var(--bg-secondary-darker),
		var(--bg-secondary),
		var(--bg-secondary-darker)
	);
	display: flex;
	justify-content: center;
`;

const Div = styled.div`
	width: 100%;
	max-width: 800px;
	display: flex;
	justify-content: center;
    align-items: center;
    svg,
    div {
        margin: 2rem;
    }
	svg {
		height: 200px;
    }
    div {
        h1 {
            margin: .5rem 0;
        }
        p {
            margin: 1.5rem 0;
        }
        a {
            text-decoration: underline;
        }
    }
`;

export interface Section3Props {}

const Section3: React.FC<Section3Props> = () => {
	return (
		<Wrapper>
			<Div>
				<WWW />
				<div>
					<h1>My projects</h1>
					<p>You can see all my projects here on my website.</p>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</div>
			</Div>
		</Wrapper>
	);
};

export default Section3;
