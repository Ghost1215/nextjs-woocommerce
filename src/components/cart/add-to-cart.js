import { isEmpty } from 'lodash';

import axios from 'axios';
import { ADD_TO_CART_ENDPOINT } from '../../utils/constants/endpoints';

const AddToCart = ( { product } ) => {
	
	if ( isEmpty( product ) ) {
		return null;
	}
	
	const addToCart = ( productId, qty = 1 ) => {
		axios.post( ADD_TO_CART_ENDPOINT, {
				product_id: productId,
				quantity: qty,
			},
			{
				withCredentials: true,
				headers: {
					'X-Headless-CMS': true,
				},
			} )
			.then( ( res ) => {
				console.log( 'card added', res );
			} )
			.catch( err => {
				console.log( 'err', err );
			} );
	};
	
	
	return (
		<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ () => addToCart( product?.id ) }>Add to cart</button>
	);
}

export default AddToCart
