import React from 'react'

const AddHotel = () => {
  return (
    <section className='bg-white shadow rounded max-w-xl mx-auto mt-10 p-6'>
      <h2 className='text-2xl font-bold mb-4 text-purple-600'>Add a New Hotel</h2>
      
      <form className='space-y-3 gap-4' >
        {/** For Name */}
        <label>Name of the Hotel</label>
        <input type="text" placeholder='Hotel Name' className='w-full border px-2 py-2' required />

            {/** For Desc */}
        <label>Description</label>
        <textarea className='border w-full py-2 px-2' name='description' placeholder='enter description of your hotel' />

            {/** For Price */}
        <label>Price per night</label>
        <input type="number" className='w-full border py-2 px-2 rounded' placeholder='Price per night' />
            {/** For Image */}
        <label>Image</label>
        <input type='text' name='Image' placeholder='Image URL' required className='w-full border p-2 rounded' />
            {/** For Selection */}
        <select name="type" className='w-full border p-2 rounded'>
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