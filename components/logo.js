import Image from 'next/image'

const Logo = () => {
  return (
    <Image
        src="/images/logo.png"
        alt="INNOCEAN MÉXICO"
        width={200}
        height={200}
    />
  )
}

export default Logo;
