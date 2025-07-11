import React, { useEffect, useState } from 'react'

const Home = () => {
 
  const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Presidential Suite",
    desc: "Elegant and expansive suite with panoramic city views and luxury amenities."
  },
      {
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    title: "Classic Deluxe Room",
    desc: "Spacious deluxe room perfect for business or leisure."
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    title: "Luxury King Room",
    desc: "Spacious king-sized room with elegant furnishings and a city view."
  },
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    title: "Standard Queen Room",
    desc: "Affordable comfort with a queen bed and modern decor."
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    title: "Family Room",
    desc: "Comfortable space with multiple beds for families."
  }
];

const [index, setIndex] = useState(0);

const handleNext = () => setIndex((prev) => (prev + 1) % slides.length)
const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  useEffect(() => {
    const timer = setInterval(() => {})
  })

  return (
    <div className='relative w-full h-[350px] overflow-hidden rounded-lg shadow-lg'>
    <img src={slides[index].image} 
    alt={slides[index].title}
    className='w-full h-full object-cover transition duration-700 ease-in-out'
     />
    <div className='absolute inset-0 bg-black/40 flex flex-col justify-center text-white text-center px-6'>
      <h1 className='text-3xl font-semibold mb-2 drop-shadow-lg'>{slides[index].title}</h1>
      <p className='text-lg'>{slides[index].desc}</p>
    </div>

<button
  onClick={handleNext}
  className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2  text-white rounded-full shadow-lg text-4xl hover:scale-105 transition duration-300"
>
  {'>'}
</button>

<button onClick={handlePrev} className='absolute  left-4 top-1/2 px-4 py-2 rounded-full -translate-y-1/2 text-white text-4xl hover:scale-105 transition duration-300'>{'<'}</button>



    </div>
  )
}

export default Home