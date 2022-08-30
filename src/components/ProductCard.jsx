import React from 'react';
import styled from 'styled-components'


const Img = styled.img`
	width: 500px:
`

const Title = styled.h4`
	text-align: center;
`

const Product = styled.div`
background-color: blue;
margin: 40px;
width: 25%;
height: 200px;
`

export default function ProductCard(props){
	return (
			<Product class="products">
			<img src="../img/p1.png" />
                <Title class="product-title">{props.title}</Title>
                <p class="product-price">${props.amt}</p>
            </Product>

	);
}