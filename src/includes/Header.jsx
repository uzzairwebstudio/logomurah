function Header() {
    return (
        <section className="bg-white md:mb-10 px-8 pt-6 pb-16 rounded-2xl">
            <div className="max-w-7xl">
                <nav className="flex items-center justify-between z-10">
                    <div className="">
                        <img src="/public/img/logo.svg" alt="Logo img" className="w-20" />
                    </div>
                    <ul className="flex items-center lg:space-x-8 font-heading">

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a href="#">tentang kami</a>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a href="#">hasil kerja</a>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a href="#">pakej</a>
                        </li>

                        <li className="font-medium text-gray-500 md:text-md hover:text-gray-400 transition ease-in-out duration-300">
                            <a href="#">hubungi kami</a>
                        </li>

                    </ul>
                </nav>
                <div className="flex items-center justify-center">
                    <div className="mt-16 lg:max-w-4xl">
                        <p className="font-heading font-semibold text-4xl md:text-4xl lg:text-7xl text-gray-800 leading-loose">
                            kami akan siapkan logo bisnes anda dalam masa <span className="inline-block px-4 py-2 bg-orange-50 rounded-lg text-orange-500">3 hari</span> sahaja
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header