import { useState, useEffect } from 'react'
import { authRequest } from '../../lib/auth'
import { useNavigate } from 'react-router'

const MarkerForm = () => {

    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        lat: 0,
        lng: 0,
        category_id: 1,
    })

    const getCategories = async () => {
        try {
            const response = await authRequest({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/categories/'
            })
            setCategories(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await authRequest({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/markers/',
                data: formData
            })
            if (response.status === 201 || response.status === 200) {
                navigate(`/`) }
        } catch (error) {
            console.error(error)
        }


    }

    return (
  <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 w-screen'>
    <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'> Add New Location </h2>

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-700'>
            Location Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            id='name'
            name='name'
            className='w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none'
            required />
        </div>
        <div>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            id='description'
            name='description'
            rows='3'
            className='w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='lat'
              className='block mb-2 text-sm font-medium text-gray-700'>
              Latitude
            </label>
            <input
              value={formData.lat}
              onChange={handleChange}
              type='number'
              id='lat'
              name='lat'
              className='w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none'
              required/>
          </div>
          <div>
            <label
              htmlFor='lng'
              className='block mb-2 text-sm font-medium text-gray-700'>
              Longitude
            </label>
            <input
              value={formData.lng}
              onChange={handleChange}
              type='number'
              id='lng'
              name='lng'
              className='w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none'
              required />
          </div>
        </div>
        <div>
          <label
            htmlFor='category_id'
            className='block mb-2 text-sm font-medium text-gray-700'>
            Category
          </label>
          <select
            value={formData.category_id}
            onChange={handleChange}
            id='category_id'
            name='category_id'
            className='w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type='submit'
          className='w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300'>
          Submit
        </button>
      </form>
    </div>
  </div>
)

}

export default MarkerForm