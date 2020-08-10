import styled from "styled-components";
import Link from "next/link";

import {
	AiOutlineInstagram,
	AiOutlineMail,
	AiFillGithub,
} from "react-icons/ai";
import { IconContext } from "react-icons/";
import { useContext } from "react";
import { ThemeContext } from "../Providers";

const SFooter = styled.footer`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: var(--bg-primary-darker);
	div {
		width: 300px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	h1 {
		font-size: 1.5em;
		font-weight: 600;
		margin: 1rem;
	}
`;

const Links = styled.div`
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		li {
			padding: 0.1rem;
			margin: .5rem;
			text-transform: uppercase;
			a {
				transition: all .6s ease;
				&:hover {
					color: var(--text-secondary);
				}
			}
		}
		&.icons {
			display: flex;
			justify-content: center;
			li {
				padding: 1rem;
			}
		}
	}
`;

const Theme = styled.p`
	background: var(--text-primary);
	color: var(--bg-primary);
	padding: .6rem 1rem;
	border-radius: 3px;
	margin: 0;
	user-select: none;
	&:hover {
		cursor: pointer;
	}
`;

export interface FooterProps {
	navItems: NavItems;
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<SFooter>
			<Links>
				<ul>
					{navItems.map(({ path, name }, i) => (
						<li key={i}>
							<Link href={path}>
								<a>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</Links>
			<div>
				<h1>© Loeka Lievens</h1>
				<Theme onClick={toggleTheme}>{theme === "dark" ? "light" : "dark"}</Theme>
			</div>
			<Links>
				<ul className="icons">
					<IconContext.Provider value={{ size: "35px" }}>
						<li>
							<a
								href="https://www.instagram.com/loeka_lievens/"
								target="_blank"
							>
								<AiOutlineInstagram />
							</a>
						</li>
						<li>
							<a
								href="mailto:loekalievens@hotmail.com"
								target="_blank"
							>
								<AiOutlineMail />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Loeka1234"
								target="_blank"
							>
								<AiFillGithub />
							</a>
						</li>
					</IconContext.Provider>
				</ul>
			</Links>
		</SFooter>
	);
};

export default Footer;
