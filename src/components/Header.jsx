import React from 'react';


export default function Header(){
	return(
		// header section component
    <div class="header-class">
        <div class="nav-links">
            <li class="link">Women</li>
            <li class="link">Men</li>
            <li class="link">Kids</li>
        </div>

        <div class="nav-links anchor-logo">
            <li class="link"><i class="fa fa-anchor"></i></li>
        </div>

        <div class="nav-links">
            <label for="price"><li class="link"><i class="fa fa-dollar"></i></li></label>
            <li class="link cart-hover-action"><label for="cart"><i class="fa fa-shopping-cart"></i></label></li>
        </div>
    </div>
	);
}


export function Cart(){
	return(
		<p>Cart</p>
	);
}