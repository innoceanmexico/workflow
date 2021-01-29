import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
      <img src="/images/logo.png" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
    </Link>
  )
}
