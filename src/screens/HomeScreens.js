import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreens = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Product key={product._id} product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
export default HomeScreens;
