export interface Author {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  ipAdress: string
}

export const authors = [
  {
    id: 1,
    firstName: 'Hai',
    lastName: 'Le',
    email: 'lekhachai@gmail.com',
    gender: 'male',
    ipAdress: '192.168.1.1'
  },
  {
    id: 2,
    firstName: 'Vy',
    lastName: 'Nguyen',
    email: 'NguyenVy@gmail.com',
    gender: 'male',
    ipAdress: '192.168.1.1'
  },
  {
    id: 3,
    firstName: 'Canh',
    lastName: 'Nguyen',
    email: 'NguyenCanh@gmail.com',
    gender: 'male',
    ipAdress: '192.168.1.1'
  }
]