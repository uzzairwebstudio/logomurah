function PricingBody(props) {

    return (

        <div className="flex flex-col p-6 max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            {props.children}
        </div>
    )
}

export default PricingBody