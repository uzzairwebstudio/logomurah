
function About() {

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-2xl p-8 bg-white flex flex-col items-center justify-center space-y-6">
                <img src="../../public/img/fisting.png" className="w-28" alt="" />
                <p className="font-heading text-gray-400 font-medium text-3xl">siapa Kilang Logo?</p>
                <p className="font-heading text-2xl font-medium text-gray-700 max-w-xl">
                    Kilang Logo merupakan sebuah tim yang berdedikasi dalam pembuatan logo dan ‘brand’. Kilang Logo diasaskan dengan tujuan untuk membantu ‘startup’ dan bisnes baharu dapatkan logo yang cantik dengan harga yang murah.
                </p>

            </div>
            <div class="col-span-1 grid grid-rows-2 grid-flow-col gap-4">
                <div className="rounded-2xl p-6 bg-orange-50 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-orange-500 font-semibold text-5xl">RM 99</p>
                    <p className="font-heading text-xl font-base text-orange-700 ">
                        Servis kami bermula dari serendah RM 99.00 sahaja. Sesuai untuk 'startup' dan bisnes baharu.
                    </p>
                </div>
                <div className="rounded-2xl p-6 bg-cyan-50 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-cyan-500 font-semibold text-5xl">3 hari</p>
                    <p className="font-heading text-xl font-base text-cyan-700 ">
                        Kami akan siapkan logo anda dalam masa 3 hari sementara anda siapkan bisnes model anda. Mudah bukan?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About