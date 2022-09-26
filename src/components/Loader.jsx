const Loader = ({active}) => {
    return (
        <div className={`lds-ring ${active?'active':''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;