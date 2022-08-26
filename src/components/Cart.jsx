import React from 'react';
import styled from 'styled-components';

const CartIcon = styled.div`
	cursor: pointer;
	margin: 0;
	padding: 0px 10px;
	height: 50px;
	&:hover {
		color: #5ECE7B;
		border-bottom: 4px solid #5ECE7B;
	}
`

const CartDrop = styled.div`
	background-color: blue;
	width: 250px;
	height: 500px;
	position: absolute;
	right: 10px;
	display: none;
`

const Label = styled.label`
`

const Clicked = styled.input`
	display: none;
	&:checked ~ ${CartDrop} {
		background-color: red;
		display: block;
	}
`

const CartSystem = styled.div `
	display: inline-block;
`

const Cart = () => {
	return(
		<CartSystem>
			<Clicked id='x' type="checkbox" />
			<Label for="x"><CartIcon className="fa fa-shopping-cart"></CartIcon></Label>
			<CartDrop>
			sup
			</CartDrop>
		</CartSystem>
	);
}

export default Cart;
