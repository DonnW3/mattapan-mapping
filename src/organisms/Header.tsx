import styled from '@emotion/styled';

import { Theme } from '../theme/Theme';
import { HeaderLink, HeaderTitle } from '../atoms/HeaderAtoms';
import { PowerfulPathwaysLogo, CFBLogo } from '../atoms/Logos';

const HeaderContainer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
	background-color: white;

	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		max-width: 1200px;
	}
`;

const LogoContainer = styled.div`
	display: none;

	@media (min-width: ${props => props.theme.mediaQuery.tablet}) {
		display: flex;
		justify-content: center;
		align-items: center;
  }
`;

export default function Header() {
	return (
		<HeaderContainer>
			<div className='header'>
				<LogoContainer><PowerfulPathwaysLogo /> | <CFBLogo/> </LogoContainer>
				<HeaderTitle>Mattapan Boston</HeaderTitle>
				<div>
					<HeaderLink href='/about' color={ Theme.colors.blue }>About</HeaderLink>
					<HeaderLink href='/explore' color={ Theme.colors.peach }>Explore</HeaderLink>
					<HeaderLink href='/meet' color={ Theme.colors.teal }>Meet</HeaderLink>
					<HeaderLink href='/share' color={ Theme.colors.orange }>Share</HeaderLink>
					<HeaderLink href='/getInvolved' color={ Theme.colors.red }>Get Invovled</HeaderLink>
				</div>
			</div>
		</HeaderContainer>
	);
}