import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Pimg from '../img/p1.png';



const List = styled.div`
    display:flex;
    background-color: green;
    margin:20px;
`


export default function ProductList(){
	return(
		<List>
			<ProductCard 
			img= '../img/p1.png'
			title= "Brian"
			amt= "50"
			/>

			<ProductCard 
			img= "none"
			title= "Brian"
			amt= "50"
			/>
			
			<ProductCard 
			img= "none"
			title= "Brian"
			amt= "50"
			/>
		</List>
	);
}