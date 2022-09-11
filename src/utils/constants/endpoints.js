export const HEADER_FOOTER_ENDPOINT = `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;
export const GET_PRODUCTS_ENDPOINT = `${process.env.NEXT_PUBLIC_SITE_URL}/api/get-products`;

/**
 * Cart
 * @type {string}
 */
export const CART_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`;

// Countries and States
export const WOOCOMMERCE_COUNTRIES_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/wc/countries/`;
export const WOOCOMMERCE_STATES_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/wc/states`;
