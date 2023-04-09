## 🎨 Next.js WooCommerce REST API
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/imranhsayed/nextjs-woocommerce-restapi?label=%E2%AD%90%20Stars)
![Forks](https://img.shields.io/github/forks/imranhsayed/nextjs-woocommerce-restapi?color=%23ff69b4)
![Contributors](https://img.shields.io/github/contributors/imranhsayed/nextjs-woocommerce-restapi?color=blue)
![Follow](https://img.shields.io/github/followers/imranhsayed?label=Please%20follow%20%20to%20support%20my%20work%20%F0%9F%99%8F&style=social)

- React WooCommerce Theme, using Decoupled Architecture in Next.js
- Backend in WordPress
- Front end in React.
- Data is Fetched through REST API.

## Features
- [x] Home Page
- [x] Single Product Page With Gallery Carousel.
- [x] Cart Page
- [x] Checkout Page with Stripe Payment Gateway Integration.
- [x] REST API endpoints.
- [x] Header and Footer in Next.js fetching from WordPress Menu items.
- [x] WordPress Widgets displayed on Next.js frontend.
- [x] Site title, tagline, copyright text, social links sourced from WordPress.
- [x] Yoast SEO support
- [x] Next.js Image component, that has image optimization at request time
- [x] Incremental Static (Re)generation and automatic creation of New Static product pages
without having to re-build next.js the application.
- [x] Gutenberg styles support
- [x] Blog Page with Pagination
- [x] Single Post
- [x] Pages
- [x] 404 Page
- [x] Display Comments
- [x] Post a Comment ( using a Comment Form )
- [ ] Post Preview ( Coming Soon )
- [ ] Product Pagination ( Coming Soon )
- [ ] Load More Products ( Coming Soon )
- [ ] Authentication with JWT and Http Only Cookie implementation. ( Coming Soon )
- [ ] Login feature for WP Post Preview in Next.js ( Coming Soon )

## [Tutorial Course](https://www.youtube.com/playlist?list=PLD8nQCAhR3tSRwsvzRtogv9MFkEWo5d9c)

## [Live Demo Link](https://nextjs-woocommerce-restapi-virid.vercel.app/)

## Setup

First clone/fork the repo and cd into it.

```bash
git clone https://github.com/imranhsayed/nextjs-woocommerce-restapi.git
cd nextjs-woocommerce-restapi
npm ci
npm run dev
```

## Add Headless features for WordPress

- Install and Activate following WordPress Plugins:

* [headless-cms](https://github.com/imranhsayed/headless-cms)
* [woocommerce](https://wordpress.org/plugins/woocommerce/)

## Configuration :wrench:

1. (Required) Create a `.env` file taking reference from `.env-example` and update your WordPressSite URL and Frontend next.js URL.
- `NEXT_PUBLIC_WORDPRESS_URL=https://example.com`
- `NEXT_PUBLIC_SITE_URL=http://localhost.com` ( This will be your frontend Next.js URL)

2. Add your `WC_CONSUMER_KEY` and `WC_CONSUMER_SECRET` to the `.env` by following [WooCommerce > Settings > Advanced > REST API](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication)

2. In your WordPress Dashboard, Go to Settings > General > Site Address (URL) ( Set this to Frontend URL e.g. http://localhost:3000 during development )
3. Create the Header and Footer Menus In WordPress Dashboard and set them to HCMS Header menu and HCMS Footer Menu respectively.

## Useful Links
- [Stripe](https://dashboard.stripe.com/)
- [Getting Stripe API Keys](https://codeytek.com/create-stripe-checkout-in-next-js-stripe-session-stripe-webhook/)

## Versioning :bookmark_tabs:

I use [Git](https://github.com/) for versioning.

## Author :bust_in_silhouette:

* **[Imran Sayed](https://twitter.com/imranhsayed)**

## License :page_with_curl:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
