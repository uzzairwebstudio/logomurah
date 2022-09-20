import { Link } from "react-scroll"

function Header() {
    return (
        <section className="bg-white mb-8 px-8 pt-6 pb-16 rounded-2xl">
            <div className="max-w-7xl">
                <nav className="flex items-center justify-between z-10">
                    <div className="">
                        <img src="/img/logo.svg" alt="Logo img" className="w-20" />
                    </div>
                    <ul className="flex items-center space-x-4 lg:space-x-8 font-heading">

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                        <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500}>tentang kami</Link>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                        <Link activeClass="active" className="works" to="works" spy={true} smooth={true} duration={500}>hasil kerja</Link>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                        <Link activeClass="active" className="pricing" to="pricing" spy={true} smooth={true} duration={500}>pakej kami</Link>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a href="#">hubungi kami</a>
                        </li>

                    </ul>
                </nav>
                <div className="flex items-center justify-center">
                    <div className="mt-16 lg:max-w-4xl">
                        <p className="font-heading font-semibold text-3xl md:text-6xl lg:text-7xl text-gray-800 lg:leading-normal md:leading-normal">
                            kami akan siapkan logo bisnes anda dalam masa <span className="inline-block px-4 py-2 bg-orange-50 rounded-lg text-orange-500">3 hari</span> sahaja
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header