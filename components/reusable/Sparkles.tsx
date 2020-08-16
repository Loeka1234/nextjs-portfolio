import { CSSProperties, useState } from "react";
import styled, { keyframes } from "styled-components";
import useRandomInterval from "./../../customHooks/useRandomInterval";
import { random } from "../../utils/random";

const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";

const generateSparkle = (color = DEFAULT_COLOR) => {
	return {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		color,
		size: random(10, 25),
		style: {
			top: random(0, 100) + "%",
			left: random(0, 100) + "%",
			zIndex: 2,
		},
	};
};

interface SparkleInstanceProps {
	color: string;
	size: number;
	style: CSSProperties;
}

const growAndShrink = keyframes`
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
`;

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(90deg);
	}
	100% {
		transform: rotate(180deg);
	}
`;

const SvgWrapper = styled.div`
	position: absolute;
	pointer-events: none;
	animation: ${growAndShrink} 600ms ease-in-out forwards;
`;

const Svg = styled.svg`
	animation: ${spin} 600ms linear forwards;
`;

const SparkleInstance: React.FC<SparkleInstanceProps> = ({
	color,
	size,
	style,
}) => {
	return (
		<SvgWrapper style={style}>
			<Svg width={size} height={size} viewBox="0 0 160 160" fill="none">
				<path
					d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
					fill={color}
				/>
			</Svg>
		</SvgWrapper>
	);
};

const Wrapper = styled.span`
	position: relative;
	display: inline-block;
`;

const ChildWrapper = styled.strong`
	position: relative;
	z-index: 1;
	font-weight: bold;
`;

export interface SparklesProps {
	color?: string;
}

const Sparkles: React.FC<SparklesProps> = ({ children, color }) => {
	const [sparkles, setSparkles] = useState([]);

	useRandomInterval(
		() => {
			const now = Date.now();

			const sparkle = generateSparkle(color);

			const nextSparkles = sparkles.filter(sparkle => {
				const delta = now - sparkle.createdAt;
				return delta < 750;
			});

			nextSparkles.push(sparkle);

			setSparkles(nextSparkles);
		},
		50,
		500
	);

	return (
		<Wrapper>
			{sparkles.map(sparkle => (
				<SparkleInstance
					key={sparkle.id}
					color={sparkle.color}
					size={sparkle.size}
					style={sparkle.style}
				/>
			))}
			<ChildWrapper>{children}</ChildWrapper>
		</Wrapper>
	);
};

export default Sparkles;
