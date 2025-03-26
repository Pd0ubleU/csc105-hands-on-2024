import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters long" })
})

export default function LoginPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange', // Validate on change
  })

  const onSubmit = (data) => {
    console.log(data)
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-clip-border shadow-md rounded-lg p-8 max-w-md mx-auto">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4"
        noValidate
      >
        <div>
          <label className="block text-l font-semibold mb-1">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-l font-semibold mb-1">Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded"
            autoComplete="current-password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-center">
        Don't have an account? <a href="/signup" class="text-blue-600">Sign Up</a>
      </p> 
    </div>
    </div>
  )
}