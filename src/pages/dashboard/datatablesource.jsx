export const userColumns = [
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      )
    },
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 230,
  },
]

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 1,
    username: "Izrael",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },

]