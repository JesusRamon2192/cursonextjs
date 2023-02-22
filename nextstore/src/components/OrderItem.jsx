import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
			<Image src={product?.images[0]} alt={product?.title} width={100} height={100}/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={styles['pointer more-clickable-area']} src={close} alt="close" onClick={() => handleRemove(product)} width={15} height={15} />
		</div>
	);
}

export default OrderItem;
