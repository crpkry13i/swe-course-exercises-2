import React from 'react';
import { Link } from 'react-router-dom';
import './FullMenu.css';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import MenuForm from './MenuForm';

function FullMenu({ items, type, addItem }) {
	console.log(type, items);
	return (
		<section className='col-md-8'>
			<Card>
				<CardBody>
					<CardTitle className='font-weight-bold text-center'>Our Menu</CardTitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</CardText>
					<ListGroup>
						{items.map((item) => (
							<Link key={item.id} to={`/${type}/${item.id}`}>
								<ListGroupItem>{item.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<MenuForm type={type === 'drinks' ? 'drinks' : 'snacks'} addItem={addItem} />
				</CardBody>
			</Card>
		</section>
	);
}

export default FullMenu;
