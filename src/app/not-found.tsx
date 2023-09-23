import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Данная страница не найдена! 404</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}