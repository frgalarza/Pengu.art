import Image from 'next/image'
import logo from '../public/penguuicono.png'

export default function Home() {
  return (
    <header>
      <Image width="200" height="200" src={logo} alt="penguu icono" />
      <h1>Penguu Art</h1>
    </header>
  )
}
