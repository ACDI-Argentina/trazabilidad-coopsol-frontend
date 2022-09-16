const BlockchainPanel = () => {
    const address = "0x34C52eFEB3eD5da825EA448FFb7e2097EfcceF8C";
    return (
        <div className="panel panel-default teal">
            <div className="panel-body">
                <div className="rw-container">
                    <p>
                        We store a hash of the data shown here in a smart contract on the <a href="https://www.lacchain.net/" target="_blank">LACCHAIN</a> network.
                        Once written, the data cannot be modified, which guarantees the <b>immutability</b> of the data.
                    </p>

                    <p> The smart contract is deployed at <a href="#">{address}</a>. You can check the source code at github[link].</p>
                    <p>If you want, you can validate the data showed here: <a href="#"> Validate</a></p>

                </div>
            </div>
        </div>

    );
}


export default BlockchainPanel;