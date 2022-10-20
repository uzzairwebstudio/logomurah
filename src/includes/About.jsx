
function About() {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" id="about">
            <div className="col-span-2 rounded-2xl p-8 bg-white flex flex-col items-center justify-center space-y-6">
                <div className="flex items-center space-x-1">
                    <img src="/img/fisting.png" className="h-28" alt="" />
                    <img src="/img/peace.png" className="h-28" alt="" />
                </div>

                <p className="font-heading text-gray-400 font-medium text-3xl">siapa Kilang Logo?</p>
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 max-w-xl">
                    Kami berdedikasi dan fokus dalam pembuatan logo dan ‘brand’. Kilang Logo ditubuhkan dengan tujuan untuk membantu ‘startup’ dan bisnes baharu dapatkan logo yang berkualiti dengan harga yang murah.
                </p>

            </div>
            <div className="col-span-1 grid grid-rows-2 grid-flow-col gap-4">
                <div className="rounded-2xl p-6 bg-pink-100 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-pink-500 font-semibold text-5xl">RM 129</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-base text-pink-700 ">
                        Servis kami bermula dari serendah RM 129.00 sahaja. Sesuai untuk ‘startup’ dan bisnes baharu.
                    </p>
                </div>
                <div className="rounded-2xl p-6 bg-cyan-50 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-cyan-500 font-semibold text-5xl">3 hari</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-base text-cyan-700 ">
                        Kami akan siapkan logo anda dalam masa 3 hari.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About