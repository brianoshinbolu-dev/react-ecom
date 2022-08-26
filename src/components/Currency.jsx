import React from 'react';
import styled from 'styled-components';


const CurrencyIcon = styled.div`
	cursor: pointer;
	padding: 0px 10px;
	height: 50px;
	&:hover {
		color: #5ECE7B;
		border-bottom: 4px solid #5ECE7B;
}
`
const CurrencyDrop = styled.div`
	width: 100px;
	height: 200px;
	background-color: blue;
	position: absolute;
	right: 50px;
	top: 60px;
	display: none;
`

const Label = styled.label``

const Clicked = styled.input`
	display: none;
	&:checked ~ ${CurrencyDrop} {
		display:block;
}
`

const CurrencySystem = styled.div`
	display: inline-block;
`

const Currency = () => {
	return(
		<CurrencySystem>
			<Clicked type='checkbox' id='currency' />
			<Label for='currency'><CurrencyIcon className="fa fa-dollar"></CurrencyIcon></Label>
			<CurrencyDrop>
			</CurrencyDrop>
		</CurrencySystem>
	);
}

export default Currency;