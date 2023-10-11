import Link from "next/link"
import logo from "../../public/penguuicono.png"
import Image from "next/image"

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link href='/'><Image width='50' height='50' src={logo} alt="penguu icon" />Penguu Art</Link></li>
                <li><Link href='/'>Inicio</Link></li>
                {/* <li><Link>Sobre Penguu</Link></li>
                <li><Link>Servicios</Link></li>
                <li><Link>Contacto</Link></li> */}
            </ul>
        </nav>
    )
}