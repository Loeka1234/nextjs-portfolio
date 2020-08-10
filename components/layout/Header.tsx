import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const SHeader = styled.header`
	display: flex;
	justify-content: center;
`;

const Nav = styled.nav`
	font-size: 2rem;
	color: white;
	position: relative;
	display: flex;
`;

const Ul = styled.ul`
	margin: 0;
	padding: 0;
`;

const NavItem = styled.li<{ margin: number; padding: number }>`
	display: inline-block;
	margin: ${props => props.margin}px;
	padding: 0 ${props => props.padding}px;
`;

const UnderLine = styled.div<{ left: number; underlineWidth: number }>`
	background: lightgreen;
	border-radius: 1px;
	position: absolute;
	top: calc(50% + 12px);
	left: ${props => props.left}px;
	width: ${props => props.underlineWidth}px;
	height: 3px;
	transition: left 0.4s ease-in-out,
		width 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
`;

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	const refContainer = useRef(null);
	const [widths, setWidths] = useState([]);
	const [left, setLeft] = useState(0);
	const [underlineWidth, setUnderlineWidth] = useState(0);
	const router = useRouter();

	const margin = 20;
	const padding = 10;

	const defaultValue = () => {
		const path = router.asPath;
		switch (path) {
			case "/":
				moveTo(0);
				break;
			case "/about":
				moveTo(1);
				break;
			case "/projects":
				moveTo(2);
				break;
			case "blog":
				moveTo(3);
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		defaultValue();
	}, [widths])

	useEffect(() => {
		// Create array of NavItem widths
		if (refContainer && refContainer.current) {
			setTimeout(() => {
				let arrWidths = [];
				const children = Array.from(refContainer.current.children);
				children.forEach((child: any, i) =>
					arrWidths.push(child.offsetWidth)
				);
				console.log(arrWidths);
				setWidths(arrWidths);
			}, 10);
		}
	}, [refContainer.current]);

	const moveTo = (el: number) => {
		const amountEl = el + 1;
		let left = 0;
		if (amountEl === 1) left += margin + padding;
		else if (amountEl === widths.length)
			left += (margin + padding) * (widths.length * 2 - 1);
		else left += (margin + padding) * (amountEl * 2 - 1);
	
		for (let i = 0; i < el; i++) {
			left += widths[i] - padding * 2;
		}
	
		setLeft(left);
		setUnderlineWidth(widths[el] - padding * 2);
	}

	const handleEnter = (el: number) => {
		moveTo(el);
	};
	const handleLeave = (i: number) => {
		defaultValue();
	};

	return (
		<SHeader>
			<Nav>
				<UnderLine left={left} underlineWidth={underlineWidth} />
				<Ul ref={refContainer}>
					<NavItem
						margin={margin}
						padding={padding}
						onMouseEnter={() => handleEnter(0)}
						onMouseLeave={() => handleLeave(0)}
					>
						<Link href="/">
							<a>Home</a>
						</Link>
					</NavItem>
					<NavItem
						margin={margin}
						padding={padding}
						onMouseEnter={() => handleEnter(1)}
						onMouseLeave={() => handleLeave(1)}
					>
						<Link href="/about">
							<a>About</a>
						</Link>
					</NavItem>
					<NavItem
						margin={margin}
						padding={padding}
						onMouseEnter={() => handleEnter(2)}
						onMouseLeave={() => handleLeave(2)}
					>
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</NavItem>
					<NavItem
						margin={margin}
						padding={padding}
						onMouseEnter={() => handleEnter(3)}
						onMouseLeave={() => handleLeave(3)}
					>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</NavItem>
				</Ul>
			</Nav>
		</SHeader>
	);
};

export default Header;
