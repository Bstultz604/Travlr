export interface Meal {
  _id: string, // internal MongoDB primary key
  type: string,
  name: string,
  image: string,
  description: string
}
