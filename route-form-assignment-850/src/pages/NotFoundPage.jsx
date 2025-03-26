import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-clip-border shadow-md rounded-lg p-10 max-w-md mx-auto text-center">
      <h1 className="text-red-500 text-2xl font-bold mb-3">404 - Page Not Found</h1>
      <p className="mb-5">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white font-medium px-4 py-2 rounded"
      >
        Go to Home
      </button>
    </div>
    </div>
  )
}