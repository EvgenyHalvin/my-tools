import { mockOrders, mockProducts } from './mockData'

export type Product = {
  id: number
  name: string
  price: number
  link: string
  description: string
}

export const mockApi = {
  getProducts: () => {
    return Promise.resolve(mockProducts)
  },
  getOrders: () => {
    return Promise.resolve(mockOrders)
  },
}
