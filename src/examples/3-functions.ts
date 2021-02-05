import {CustomerEmail, CustomerPhone} from './2-interfaces'

//* Defining function params and return types

function callCustomer(to: CustomerPhone): {recipient: string; message: string} {
  return {
    recipient: 'Mat',
    message: 'Call me back!',
  }
}

interface SendEmail {
  to: string
  isSent: boolean
  autoSend?: boolean
}

const emailCustomer = (to: CustomerEmail): SendEmail => ({
  to: 'Henry',
  isSent: false,
})

export {}
