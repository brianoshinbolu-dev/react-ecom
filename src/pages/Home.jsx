import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import ProductList from '../components/ProductList';





const Home = () => {
	return (
		<div>
			<Navbar />
			<ProductList />			
		</div>
	)
}

export default Home;