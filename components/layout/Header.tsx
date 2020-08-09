import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
	font-size: 2rem;
	color: white;
`;

const NavItem = styled.li``;

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header>
			<Nav>
				<ul>
					<NavItem>
						<Link href="/">
							<a>Home</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/about">
							<a>About</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</NavItem>
				</ul>
			</Nav>
		</header>
	);
};

export default Header;
