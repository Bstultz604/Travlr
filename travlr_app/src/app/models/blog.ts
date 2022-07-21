export interface Blog {
  _id: string, // internal MongoDB primary key
  title: string,
  date: Date,
  author: string,
  content: string,
  type: string,
  image: string
}
