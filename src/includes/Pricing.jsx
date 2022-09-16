import PricingItem from "../components/PricingItem"

function Pricing() {

    return (
        <section className="bg-white dark:bg-gray-900 my-8 rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
                <div className="mx-auto text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 font-heading text-4xl tracking-tight font-extrabold text-gray-400 dark:text-white">Berikut Adalah Pakej Kami</h2>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 lg:space-y-0">
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold font-heading">Kiosk</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">RM 99</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <PricingItem item="1 Konsep Logo" />
                        </ul>
                        <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-indigo-900">Get started</a>
                    </div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold font-heading">Kedai</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">RM 299</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                        </ul>
                        <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-indigo-900">Get started</a>
                    </div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Kilang</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">RM 499</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            
                        </ul>
                        <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-indigo-900">Get started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing