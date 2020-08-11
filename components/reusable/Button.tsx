import styled, { css } from "styled-components";

const Button = styled.button<{ primary?: boolean; disableHover?: boolean }>`
	height: 40px;
	width: 90px;
	color: ${props =>
		props.primary ? "var(--text-primary)" : "var(--bg-secondary)"};
	border: 2px solid
		${props =>
			props.primary ? "var(--text-primary)" : "var(--text-primary)"};
	background: ${props =>
		props.primary ? "var(--bg-secondary)" : "var(--text-primary)"};
	border-radius: 2px;
	cursor: pointer;
	&:hover {
		${props =>
			!props.disableHover &&
			css`
				color: ${!props.primary
					? "var(--text-primary)"
					: "var(--bg-secondary)"};
				border: 2px solid
					${!props.primary
						? "var(--text-primary)"
						: "var(--text-primary)"};
				background: ${!props.primary
					? "var(--bg-secondary)"
					: "var(--text-primary)"};
			`}
	}
    transition: all .35s ease-in-out;
	font-size: 1.4rem;
`;

Button.defaultProps = {
	primary: false,
	disableHover: false,
};

export default Button;
