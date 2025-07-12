import React, { useState } from 'react'

const AddHotel = () => {


      //useState to store form input data
    const [formData, setFromData] = useState({
        name: '',
        description: '',
        price: '',
        location: '',
        image: '',
        typr: 'Standard'
    });

      //Handle input changes (update state as user types)
    const handleChange = (e) => {
        setFromData({
            ...formData, //keep the other values unchanged
             [e.target.name] : e.target.value //update the specific field by name
        });
    };
    
    //handle form submission to send data to backend
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent default page reload

        try {
            //send POST request to backend server
            const res = await fetch('http://localhost:5000/api/hotels' , {
                method: 'POSR',
                headers: {
                    'Content-Type' : 'application/json' //indicate we're senfing JSON
                },
                body: JSON.stringify(formData) //converts the form data into JSON
            });
      
            const data = await res.json(); //parse response as JSON


            //if hotel is added successfully
            if(res.ok) {
                alert('Hotel added successfully');
               //Reset form after success
                setFromData({
                    name: '',
                    description: '',
                    price: '',
                    location: '',
                    image: '',
                    type: 'Standard'
                })
            } else {
                //if something went  wrong (like validation error)
                alert(data.message || 'Failed to add hotel')
            }

        } catch (err) {
            //if server is down or error occurred during request
            console.error('Error: ', err);
            alert('Something wnet wrong')
        }
    }

  return (
    <section className='bg-white shadow rounded max-w-xl mx-auto mt-10 p-6'>
      <h2 className='text-2xl font-bold mb-4 text-purple-600'>Add a New Hotel</h2>
      
      <form onSubmit={handleSubmit} className='space-y-3 gap-4' >
        {/** For Name */}
        <label>Name of the Hotel</label>
        <input value={formData.name} onChange={handleChange} type="text" placeholder='Hotel Name' className='w-full border px-2 py-2' required />

            {/** For Desc */}
        <label>Description</label>
        <textarea onChange={handleChange} value={formData.description} className='border w-full py-2 px-2' name='description' placeholder='enter description of your hotel' />

            {/** For Price */}
        <label>Price per night</label>
        <input value={formData.price} onChange={handleChange} type="number" className='w-full border py-2 px-2 rounded' placeholder='Price per night' />
        
        <label>Location</label>
        <input value={formData.location} onChange={handleChange} type="text" className='w-full border p-2 rounded' />
            {/** For Image */}
        <label>Image</label>
        <input onChange={handleChange} value={formData.image} type='text' name='Image' placeholder='Image URL' required className='w-full border p-2 rounded' />
            {/** For Selection */}
        <select
        onChange={handleChange} value={formData.type}
        name="type" className='w-full border p-2 rounded'>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Presidential">Presidential</option>
        </select>

          {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Hotel
        </button>
      </form>

    </section>
  )
}

export default AddHotel