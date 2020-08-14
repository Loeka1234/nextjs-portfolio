import { useMediaQuery } from "react-responsive";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export interface HeaderProps {
    navItems: NavItems;
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
	const desktop = useMediaQuery({
		minWidth: "900px",
	});

	return desktop ? (
		<DesktopHeader
			navItems={navItems}
			padding={30}
			margin={0}
			navPadding={20}
		/>
	) : (
		<MobileHeader navItems={navItems} />
	);
};

export default Header;
