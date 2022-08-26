import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import Cart from './Cart';
import Currency from './Currency';

const Container = styled.div`
	height: 60px;
	font-weight: 600;
	font-size:16px;
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`

const Left = styled.div`
	width: 33.3%;
	text-align: Center;
	list-style-type: none;
	display: flex;
	justify-content: space-evenly;
`

const NavLink = styled.div`
	cursor: pointer;
	padding:0 10px;
	height: 56px;
	&:hover {
		color: #5ECE7B;
		border-bottom: 4px solid #5ECE7B;
}
`;

const Center = styled.div`
	width: 33.3%;
	text-align: center;
`
const Right = styled.div`
	width: 33.3%;
	text-align: right;
`

const LogoIcon = styled.img`
cursor: pointer;
`

const Navbar = () => {
	return(
		<Container>
			<Wrapper>
				<Left>
					<NavLink>WOMEN</NavLink>
					<NavLink>MEN</NavLink>
					<NavLink>KIDS</NavLink>
				</Left>
				<Center><LogoIcon src={Logo} alt ="logo" /></Center>
				<Right>
					<Currency />
					<Cart />
				</Right>
			</Wrapper>
		</Container>
		);
}

export default Navbar;