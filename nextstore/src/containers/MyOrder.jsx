import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className="MyOrder-container">
				<div className="title-container">
					<Image width={15} height={15} className="more-clickable-area pointer" src={arrow} alt="arrow" onClick={() => toggleOrder()} />
					<p className="title">My order</p>
				</div>
				<div className="my-order-content">
					<div className="my-orders">
						{state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))}
					</div>
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<Link className="primary-button" href="/checkout">
						Checkout
					</Link>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
