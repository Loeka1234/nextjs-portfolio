import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Link from "next/link";

import { RiArrowDropDownLine } from "react-icons/ri";

const SHeader = styled.header`
	z-index: 99;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: var(--bg-primary-darker);
`;

const Logo = styled.h1<{ padding: number }>`
	font-family: "Megrim", cursive;
	color: var(--text-primary);
	padding: ${props => props.padding}px;
	margin: 0;
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

const DropDown = styled.div<{ dropDownWidth: number }>`
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	width: ${props => props.dropDownWidth}px;
	background: var(--bg-primary-darker);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	z-index: 3;
	ul {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		list-style-type: none;
		padding: 0;
	}
`;

interface INavItem {
	navPadding: number;
	padding: number;
	dropDown: boolean;
}

const NavItem = styled.li<INavItem>`
	display: inline-block;
	padding: ${props => props.navPadding}px ${props => props.padding}px;
	position: relative;
	${props =>
		props.dropDown &&
		css`
			${DropDown} {
				display: none;
			}
			&:hover ${DropDown} {
				display: block;
			}
			svg {
				margin: -9px;
				margin-left: -5px;
			}
		`}
`;

const UnderLine = styled.div<{ left: number; underlineWidth: number }>`
	background: var(--text-secondary);
	border-radius: 1px;
	position: absolute;
	top: calc(50% + 10px);
	left: ${props => props.left}px;
	width: ${props => props.underlineWidth}px;
	height: 2.5px;
	transition: left 0.4s ease-in-out,
		width 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
	pointer-events: none;
`;

const DropDownItem = styled.li`
	display: block;
	padding: 1.5rem 0;
	width: 100%;
	text-align: center;
	cursor: pointer;
	&:hover {
		color: var(--text-secondary);
	}
`;

export interface HeaderProps {
	navItems: NavItems;
	margin: number;
	padding: number;
	navPadding: number;
}

const Header: React.FC<HeaderProps> = ({
	navItems,
	margin,
	padding,
	navPadding,
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
	}, [widths, router]);

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
					<Logo padding={navPadding}>Loeka Lievens</Logo>
				</a>
			</Link>
			<Nav>
				<UnderLine left={left} underlineWidth={underlineWidth} />
				<Ul ref={refContainer}>
					{navItems.map(({ path, name, dropDown }, i) => (
						<NavItem
							navPadding={navPadding}
							padding={padding}
							onMouseEnter={() => handleEnter(i)}
							onMouseLeave={() => handleLeave(i)}
							key={i}
							dropDown={dropDown ? true : false}
						>
							<Link href={path}>
								<a style={{ outline: "none" }}>
									{name}
									{dropDown && (
										<RiArrowDropDownLine size={30} />
									)}
								</a>
							</Link>
							{dropDown && (
								<DropDown dropDownWidth={widths[i]}>
									<ul>
										{dropDown.map(({ name, path }, i) => (
											<DropDownItem key={i}>
												<Link href={path}>
													<a>{name}</a>
												</Link>
											</DropDownItem>
										))}
									</ul>
								</DropDown>
							)}
						</NavItem>
					))}
				</Ul>
			</Nav>
		</SHeader>
	);
};

export default Header;
