import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import logo from '../assets/white_on_trans.png'

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={100} height={100} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/praphusak-tre-intong-1a17091b8/" target='_blank' aria-label='LinkendIn'><FaLinkedinIn/></a>   
            <a href="https://github.com/Gunta2ps" target='_blank' aria-label='LinkendIn'><FaGithub/></a>   
        </div>
    </nav>
  )
}

export default Navbar