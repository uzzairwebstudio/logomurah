function PricingBody(props) {

    return (

        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow ">
            {props.children}
        </div>
    )
}

export default PricingBody