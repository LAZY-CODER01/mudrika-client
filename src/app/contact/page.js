import React from 'react'
const cardData = [
  {
    id: 1,
    image: "./public/food10.png",
    title: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
  },
  {
    id: 2,
    image: "./public/food11.png",
    title: "Burger Delight",
    price: "₹120",
    rating: 4.5,
    time: "30-45 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
  {
    id: 3,
    image: "./public/food12.png",
    title: "Pasta Special",
    price: "₹250",
    rating: 4.8,
    time: "40-60 min",
  },
];

const Contact = () => {
  return (
    <div className="grid grid-cols-3 gap-8 h-[100vh] w-full">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="bg-white rounded-lg overflow-hidden h-[50%] w-[100%] shadow-md"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[20%] object-cover"
        />
        <div className="flex flex-row justify-between items-center px-3 mt-2">
          <h3 className="text-lg font-medium">{card.title}</h3>
          <p className="text-lg">{card.price}</p>
        </div>
        <div className="info flex justify-between items-center px-3 py-2 text-sm text-gray-500">
          <div className="rating-time-group flex items-center gap-5 w-[90%]">
            <div className="ratings flex items-center bg-gray-100 p-1 rounded-md border border-gray-200 gap-2 w-[25%]">
              <span className="text-xl text-black">★</span>
              <span className="text-sm text-black">{card.rating}</span>
            </div>
            <span className="time bg-gray-200 flex justify-center items-center rounded-md text-black text-sm font-medium w-[50%] px-2 py-1">
              <span className="bg-white px-3 py-1 rounded-md">
                {card.time}
              </span>
            </span>
          </div>
          <span className="bg-yellow-500 text-white font-extrabold text-lg rounded-full h-auto w-[30px] flex justify-center items-center">
            +
          </span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Contact