export type TProduct = {
  id: number
  name: string
  price: number
  link: string
  description: string
}

export type TOrder = {
  id: number
  name: string
  date: Date
  status: 'pending' | 'completed' | 'cancelled'
  products: TProduct[]
}