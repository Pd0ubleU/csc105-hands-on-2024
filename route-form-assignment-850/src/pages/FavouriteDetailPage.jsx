import { useParams, useSearchParams } from 'react-router-dom'

export default function FavouriteDetailPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  const size = searchParams.get('size')

  return (
    <div className="p-5 text-l font-medium mb-4">
      <p>
        Your favourite post is <strong>{q}</strong>. Post ID is <strong>{id}</strong>. Size is <strong>{size}</strong>.
      </p>
    </div>
  )
}