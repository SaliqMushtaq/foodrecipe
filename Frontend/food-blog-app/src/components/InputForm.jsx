import React, { useState } from 'react'
import axios from 'axios'

export default function InputForm({ setIsOpen }) {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    time: '',
    coverImage: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/recipe', formData)
      alert('Recipe added successfully!')
      setIsOpen(false)
      setFormData({
        title: '',
        ingredients: '',
        instructions: '',
        time: '',
        coverImage: ''
      })
    } catch (error) {
      alert('Error adding recipe: ' + error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='input-form'>
      <h2>Add a New Recipe</h2>
      
      <input
        type='text'
        name='title'
        placeholder='Recipe Title'
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name='ingredients'
        placeholder='Ingredients (one per line)'
        value={formData.ingredients}
        onChange={handleChange}
        required
      />

      <textarea
        name='instructions'
        placeholder='Instructions'
        value={formData.instructions}
        onChange={handleChange}
        required
      />

      <input
        type='text'
        name='time'
        placeholder='Cooking Time (e.g., 30 min)'
        value={formData.time}
        onChange={handleChange}
      />

      <input
        type='url'
        name='coverImage'
        placeholder='Image URL'
        value={formData.coverImage}
        onChange={handleChange}
      />

      <button type='submit'>Add Recipe</button>
    </form>
  )
}
