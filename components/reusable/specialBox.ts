import { css } from "styled-components";

const specialBox = css`
	position: relative;
	border: 1px solid var(--text-secondary);
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: calc(100% + 5px);
		width: calc(100% + 5px);
		border-bottom: 1px solid var(--text-secondary);
		border-right: 1px solid var(--text-secondary);
		z-index: 0;
		pointer-events: none;
	}
`;

export default specialBox;
