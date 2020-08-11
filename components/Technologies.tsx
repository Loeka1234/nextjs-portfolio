import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 6rem);
	max-width: 250px;
	border: 1px solid var(--text-secondary);
	position: relative;
    margin: 3rem;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: calc(100% + 5px);
		width: calc(100% + 5px);
		border-bottom: 1px solid var(--text-secondary);
		border-right: 1px solid var(--text-secondary);
		z-index: -1;
	}
`;

const Header = styled.h2`
	margin: 1rem;
	font-weight: 400;
    font-size: 1.7em;
	text-align: center;
`;

const Icons = styled.div`
	margin: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
	&:hover {
		img {
			filter: grayscale(100%);
			cursor: pointer;
		}
	}
	img {
		padding: 0.5rem;
        width: 100%;
		&:hover {
			filter: grayscale(0);
		}
	}
`;

export interface TechnologiesProps {
    directory: string;
    images: string[];
    heading: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ directory, images, heading }) => {
	return (
		<Wrapper>
			<Header>{heading}</Header>
			<Icons id="icons">
                {images.map((img, i) => <img src={directory + img} key={i} />)}
			</Icons>
		</Wrapper>
	);
};

export default Technologies;
