import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const StyledHamburger = styled(Hamburger)`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
	margin: 1rem;
`;

const Header = styled.header<{ open: boolean }>`
	position: fixed;
	top: 0;
	right: ${props => (props.open ? 0 : "-100%")};
	width: 60%;
	background: var(--bg-secondary-darker);
	height: 100%;
	z-index: 99;
	transition: ${props =>
		props.open ? "right 1s ease-in-out" : " right .2s ease-in-out"};
`;

const HeaderBg1 = styled.div<{ open: boolean }>`
	position: fixed;
	top: 0;
	right: ${props => (props.open ? 0 : "-100%")};
	width: 61.5%;
	background: var(--bg-secondary-most-dark);
	height: 100%;
	z-index: 98;
	transition: right 0.6s ease-in-out;
`;

const HeaderBg2 = styled.div<{ open: boolean }>`
	position: fixed;
	top: 0;
	right: ${props => (props.open ? 0 : "-100%")};
	width: 63%;
	background: var(--bg-primary-darker);
	height: 100%;
	z-index: 97;
	transition: ${props =>
		props.open ? "right .3s ease-in-out" : " right 1s ease-in-out"};
`;

const Nav = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		padding: 0;
	}
`;

const NavItem = styled.li`
	list-style-type: none;
	margin: 4rem 0;
	text-transform: uppercase;
	font-size: 2rem;
	a {
		padding: 2rem;
	}
`;

export interface MobileHeaderProps {
	navItems: NavItems;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ navItems }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(false);
	};

	return (
		<>
			<StyledHamburger open={open} onClick={() => setOpen(!open)} />
			<HeaderBg1 open={open} />
			<HeaderBg2 open={open} />
			<Header open={open}>
				<Nav>
					<ul>
						{navItems.map((navItem, i) => (
							<NavItem onClick={handleClick} key={i}>
								<Link href={navItem.path}>
									<a>{navItem.name}</a>
								</Link>
							</NavItem>
						))}
					</ul>
				</Nav>
			</Header>
		</>
	);
};

export default MobileHeader;
