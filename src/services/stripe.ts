import Stripe from 'stripe'
const version = process.env.npm_package_version;

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: "Ignews",
      version
    }
  }
)
