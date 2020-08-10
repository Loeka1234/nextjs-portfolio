import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const SHeader = styled.header`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Logo = styled.h1<{ margin: number }>`
	font-family: "Megrim", cursive;
	color: var(--text-primary);
	margin: ${props => props.margin}px;
	font-size: 3rem;
`;

const Nav = styled.nav`
	font-size: 2rem;
	color: var(--text-primary);
	position: relative;
	display: flex;
`;

const Ul = styled.ul`
	margin: 0;
	padding: 0;
`;

const NavItem = styled.li<{ margin: number; padding: number }>`
	display: inline-block;
	margin: ${props => props.margin}px 0;
	padding: 0 ${props => props.padding}px;
`;

const UnderLine = styled.div<{ left: number; underlineWidth: number }>`
	background: var(--text-secondary);
	border-radius: 1px;
	position: absolute;
	top: calc(50% + 10px);
	left: ${props => props.left}px;
	width: ${props => props.underlineWidth}px;
	height: 3px;
	transition: left 0.4s ease-in-out,
		width 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
	pointer-events: none;
`;

export interface HeaderProps {
	navItems: NavItems;
	margin: number;
	padding: number;
	navMargin: number;
}

const Header: React.FC<HeaderProps> = ({
	navItems,
	margin,
	padding,
	navMargin,
}) => {
	const refContainer = useRef(null);
	const [widths, setWidths] = useState([]);
	const [left, setLeft] = useState(0);
	const [underlineWidth, setUnderlineWidth] = useState(0);
	const router = useRouter();

	const defaultValue = () => {
		const path = router.asPath;
		for (let i = 0; i < navItems.length; i++) {
			if (navItems[i].path === path) moveTo(i);
		}
	};

	useEffect(() => {
		defaultValue();
	}, [widths]);

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
			}, 100);
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
	};

	const handleEnter = (el: number) => {
		moveTo(el);
	};
	const handleLeave = (i: number) => {
		defaultValue();
	};

	return (
		<SHeader>
			<Link href="/">
				<a>
					<Logo margin={navMargin}>Loeka Lievens</Logo>
				</a>
			</Link>
			<Nav>
				<UnderLine left={left} underlineWidth={underlineWidth} />
				<Ul ref={refContainer}>
					{navItems.map(({ path, name }, i) => (
						<NavItem
							margin={navMargin}
							padding={padding}
							onMouseEnter={() => handleEnter(i)}
							onMouseLeave={() => handleLeave(i)}
						>
							<Link href={path}>
								<a>{name}</a>
							</Link>
						</NavItem>
					))}
				</Ul>
			</Nav>
		</SHeader>
	);
};

export default Header;
