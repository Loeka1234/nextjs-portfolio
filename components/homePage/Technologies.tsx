import styled, { css } from "styled-components";
import specialBox from "./../reusable/specialBox";
import { useState, useEffect, useRef } from "react";

const Wrapper = styled.div<{ fixedHeight: number | undefined }>`
	width: calc(100% - 6rem);
	margin: 3rem;
	max-width: 250px;
	${props => props.fixedHeight && `height: ${props.fixedHeight}px;`}
	${specialBox}
	@media screen and (max-width: 300px) {
		max-width: 100%;
		height: auto;
	}
`;

const Header = styled.h2`
	margin: 1rem;
	font-weight: 400;
	font-size: 1.4em;
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
		position: relative;
		padding: 0.5rem;
		width: 100%;
		transition: filter 0.15s ease-in-out, transform 0.2s ease-in-out;
		&:hover {
			filter: grayscale(0);
			transform: scale(1.1);
		}
	}
`;

const ExtraInfo = styled.div`
	pointer-events: none;
	position: absolute;
	top: -20px;
	left: 50%;
	transform: translateX(-50%);
	background: var(--bg-primary-darker);
	border-radius: 3px;
	font-size: 1.6rem;
	transition: opacity .2s ease-in-out;
	p {
		padding: 0.5rem 1rem;
		margin: 0;
	}
	&::before {
		content: "";
		position: absolute;
		bottom: -4px;
		left: 50%;
		height: 15px;
		width: 15px;
		background: var(--bg-primary-darker);
		transform: translateX(-50%) rotate(45deg);
		z-index: -1;
		-webkit-box-shadow: 3px 4px 5px -4px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 3px 4px 5px -4px rgba(0, 0, 0, 0.75);
		box-shadow: 3px 4px 5px -4px rgba(0, 0, 0, 0.75);
	}
`;

const Img = styled.img``;

const ImageWrap = styled.div`
	position: relative;
`;

export interface TechnologiesProps {
	directory: string;
	images: { fileName: string; desc: string }[];
	heading: string;
	fixedHeight?: number;
}

const Technologies: React.FC<TechnologiesProps> = ({
	directory,
	images,
	heading,
	fixedHeight,
}) => {
	const [visibleDesc, setVisibleDesc] = useState(undefined);

	const handleEnter = (i: number) => {
		setVisibleDesc(i);
	};

	const handleLeave = () => {
		setVisibleDesc(undefined);
	};

	return (
		<Wrapper fixedHeight={fixedHeight}>
			<Header>{heading}</Header>
			<Icons>
				{images.map(({ fileName, desc }, i) => (
					<ImageWrap key={i}>
						<Img
							src={directory + fileName}
							onClick={() => setVisibleDesc(i)}
							onMouseEnter={() => handleEnter(i)}
							onMouseLeave={handleLeave}
							alt="technology"
						/>
						<ExtraInfo
							style={{
								opacity: visibleDesc === i ? 1 : 0,
							}}
						>
							<p>{desc}</p>
						</ExtraInfo>
					</ImageWrap>
				))}
			</Icons>
		</Wrapper>
	);
};

export default Technologies;
