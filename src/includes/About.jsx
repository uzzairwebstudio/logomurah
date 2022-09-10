
function About() {

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-2xl p-8 bg-white flex flex-col items-center justify-center space-y-6">
                <img src="../../public/img/fisting.png" className="w-28" alt="" />
                <p className="font-heading text-gray-400 font-medium text-3xl">siapa kami?</p>
                <p className="font-heading text-4xl font-medium text-gray-700 max-w-xl">
                    we are a team of designers, and managers, that will help you with logo for your business or startup, and will do it fast, cost-effective, and qualitative
                </p>

            </div>
            <div class="col-span-1 grid grid-rows-2 grid-flow-col gap-4">
                <div className="rounded-2xl p-6 bg-pink-100 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-pink-500 font-semibold text-5xl">RM 99</p>
                    <p className="font-heading text-xl font-base text-pink-700 ">
                        You can buy a pound of Wagyu
                        Steak for $99, or order a Logolivery
                        that will impress your customers
                    </p>
                </div>
                <div className="rounded-2xl p-6 bg-cyan-50 flex flex-col items-center justify-center space-y-6">
                    <p className="font-heading text-cyan-500 font-semibold text-5xl">3 hari</p>
                    <p className="font-heading text-xl font-base text-cyan-700 ">
                        In 3 days you can prepare
                        a Business Model. Meanwhile,
                        our team will prepare a logo
                        for your first pitch
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About