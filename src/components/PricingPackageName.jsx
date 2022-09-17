function PricingPackageName(props) {

    return (
        <h3 className="mb-4 text-2xl font-semibold font-heading">
            <span className={`px-4 py-2 rounded-xl ${props.classes}`}>
                {props.name}
            </span>
        </h3>
    )

}

export default PricingPackageName