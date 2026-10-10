# 🛒 বাজার দর | BazarDor

**BazarDor** is a responsive web application that helps users explore daily prices of essential commodities in Bangladesh. Users can browse products, compare price changes, explore categories, and view market-wise price details.

## ✨ Key Features

- 📊 **Daily Price Tracking** — Explore products with price increases and decreases.
- 🛍️ **Product Catalog** — Browse all products with prices, units, and change indicators.
- 🗂️ **Category & Sorting** — Filter products by category and sort by price.
- 📈 **Product Details** — View minimum, maximum, average, and market-wise prices.
- 🔐 **Authentication** — Sign up, sign in, and social login with Better Auth.
- 👤 **Profile Management** — Update user information.
- ⚡ **Loading & Error States** — Skeleton loaders, error handling, and custom 404 page.
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

- **Next.js** — App Router and server-side rendering
- **TypeScript** — Type safety
- **Tailwind CSS** — Responsive styling
- **Better Auth** — Authentication and session management
- **MongoDB** — Database
- **React Hot Toast** — Notifications

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd bazardor
npm install
```

Create a `.env` file and configure the required environment variables:

```env
PRODUCT_API=your_product_api_url
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

Add your MongoDB connection string and any required Google/GitHub OAuth credentials according to your Better Auth configuration.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

Deploy the application on [Vercel](https://vercel.com/). Configure all required environment variables in the project settings before deployment.

---

**Note:** Product prices are indicative and may change depending on market conditions.

Made with ❤️ in Bangladesh 🇧🇩