export interface Room {
  _id: string, // internal MongoDB primary key  
  name: string,
  description: string,
  rate: string,
  image: string
}
