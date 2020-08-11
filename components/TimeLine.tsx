import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IconContext } from "react-icons";

const Wrapper = styled.div<{ left: number; wrapperWidth: string }>`
	width: 100%;
	height: 100%;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: ${props => props.left}%;
		height: 4px;
		width: ${props => props.wrapperWidth};
		background: var(--text-secondary);
		transition: left 0.4s ease-in-out;
	}
	overflow: hidden;
`;

const Item = styled.div<{ left: number }>`
	position: absolute;
	top: 50%;
	transform: translateX(-50%);
	width: 400px;
	line-height: 1.1;
	text-align: center;
	left: ${props => props.left}%;
	transition: left 0.4s ease-in-out;
	font-size: 0.9em;
	p.date {
		font-size: 0.9em;
		margin-top: 2rem;
	}
	.wrap {
		h1 {
			margin: 0.5rem;
		}
		h1,
		p {
			padding: .2rem .5rem;
		}
		position: relative;
		border: 1px solid var(--text-secondary-darker);
		&::before {
			content: "";
			position: absolute;
			top: 0; left: 0;
			height: calc(100% + 5px);
			width: calc(100% + 5px);
			border-bottom: 1px solid var(--text-secondary-darker);
			border-right: 1px solid var(--text-secondary-darker);
		}
	}
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: var(--text-secondary);
	}
	.extraEl {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -100%);
	}
`;

const Navigation = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	svg {
		fill: var(--text-primary);
		margin-top: 10rem;
		&:hover {
			cursor: pointer;
		}
	}
`;

export interface TimeLineProps {
	items: TimelineItems;
}

const TimeLine: React.FC<TimeLineProps> = ({ items }) => {
	const [left, setLeft] = useState(50);
	const [selectedItem, setSelectedItem] = useState(0);

	const distanceUntilNextItem = 40;

	const handleBefore = () => {
		if (selectedItem > 0) setSelectedItem(selectedItem - 1);
	};

	const handleNext = () => {
		if (selectedItem < items.length - 1) setSelectedItem(selectedItem + 1);
	};

	useEffect(() => {
		setLeft(50 - distanceUntilNextItem * selectedItem);
	}, [selectedItem]);

	return (
		<Wrapper
			left={left}
			wrapperWidth={(items.length - 1) * distanceUntilNextItem + "%"}
		>
			<Navigation>
				<IconContext.Provider value={{ size: "70px" }}>
					<MdNavigateBefore
						onClick={handleBefore}
						style={{
							opacity: selectedItem === 0 ? 0 : 1,
							cursor: selectedItem === 0 ? "initial" : "pointer",
						}}
					/>
					<MdNavigateNext
						onClick={handleNext}
						style={{
							opacity: selectedItem === items.length - 1 ? 0 : 1,
							cursor:
								selectedItem === items.length - 1
									? "initial"
									: "pointer",
						}}
					/>
				</IconContext.Provider>
			</Navigation>
			{items.map(({ title, description, date, extraEl }, i) => (
				<Item left={left + i * distanceUntilNextItem} key={i}>
					<div className="extraEl">{extraEl && extraEl}</div>
					<p className="date">{date}</p>
					<div className="wrap">
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</Item>
			))}
		</Wrapper>
	);
};

export default TimeLine;
