// * Interfaces, Intersections, and Unions

// * Simple Interface
interface PieResearch {
  name: string
  numberOfPies: number
  favoritePie?: string
}

let piesBought: PieResearch

//! Intersection |
export interface CustomerPhone {
  name: string
  phone: number
}

export interface CustomerEmail {
  name: string
  email: string
}

const customerInfo: CustomerPhone | CustomerEmail =
  Math.random() > 0.5
    ? {
        name: 'Misha',
        phone: 1231231234,
      }
    : {
        name: 'Frank',
        email: 'frank@theaba.org',
      }

// * Look at accessible properties

//! Union &
const newCustomerInfo: CustomerPhone & CustomerEmail = {
  name: 'Bobby',
  email: 'bobby@theaba.org',
  phone: 1231231234,
}

export {}
