import { Link } from "react-scroll"
function Footer() {
    return (
        <section className="mb-8 pt-6">
            <div className="max-w-7xl">
                <div className="flex md:hidden items-center justify-center">
                    <img src="/img/logo.svg" alt="Logo img" className="w-16" />
                </div>
                <nav className="hidden md:flex items-end justify-between z-10">
                    <div className="flex items-end space-x-4">
                        <img src="/img/logo.svg" alt="Logo img" className="w-16" />
                        <p class="font-heading font-medium text-sm text-gray-500">Hak Cipta Terpelihara, Uzzair Web Studio 2022</p>
                    </div>
                    <ul className="flex items-end space-x-4 lg:space-x-8 font-heading">

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a target="_blank" href="https://uzzairwebstudio.slab.com/posts/kilang-logo-service-agreement-ahz1naak">terma servis</a>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a target="_blank" href="https://uzzairwebstudio.slab.com/posts/kilang-logo-service-policy-vqiebgqd">polisi privasi</a>
                        </li>



                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Footer