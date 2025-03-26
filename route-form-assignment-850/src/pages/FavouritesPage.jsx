import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  number: z.number({
    required_error: "Number is required",
    invalid_type_error: "Expected number, recieved nan"
  })
  .min(1, { message: "Number must be at least 1" })
  .max(100, { message: "Number must be 100 or less" }),
  q: z.enum(['love', 'like'], {
    required_error: "Please select an option",
    invalid_type_error: "Select either 'love' or 'like'"
  }),
  size: z.enum(['small', 'medium', 'large'], {
    required_error: "Please select a size",
    invalid_type_error: "Select a valid size"
  })
})

export default function FavouritesPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`)
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-clip-border shadow-md rounded-lg p-8 max-w-md mx-auto">
      <h1 className="text-2xl text-center font-bold mb-6 px-15">Favourites Page</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4"
        noValidate
      >
        <div>
          <label className="block font-semibold mb-1">Number :</label>
          <input
            {...register('number', { 
              valueAsNumber: true,
              required: "Number is required"
            })}
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>
        
        <div>
          <label className="block font-semibold mb-1">Q :</label>
          <select
            {...register('q')}
            className="w-full p-2 border border-gray-300 rounded"
            defaultValue=""
          >
            <option value="" disabled>Select</option>
            <option value="love">love</option>
            <option value="like">like</option>
          </select>
          {errors.q && (
            <p className="text-red-500 text-sm mt-1">{errors.q.message}</p>
          )}
        </div>
        
        <div>
          <label className="block font-semibold mb-1">Size :</label>
          <select
            {...register('size')}
            className="w-full p-2 border border-gray-300 rounded"
            defaultValue=""
          >
            <option value="" disabled>Select</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          {errors.size && (
            <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}