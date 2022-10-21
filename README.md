# Running the app

* Install dependencies
```npm i```

* Set environment variables in .env file, using .env.example as guide
```
REACT_APP_TRACEABILITY_REGISTRY_ADDRESS=0x0ac5D9F21Fb7071325f184B3C48DC9907493a56b
REACT_APP_NETWORK_URL=https://goerli.infura.io/v3/ab09500d0d5342af9e4067aefbc1f816
REACT_APP_NETWORK_EXPLORER=https://goerli.etherscan.io
REACT_APP_NETWORK_NAME="Goerli"

REACT_APP_TRACEABILITY_BACKEND=https://trazabilidad-coopsol-backend.up.railway.app
```

* Fix problem with module crypto dependency  
Replace the content of  ```node_modules/object-hash/dist/object_hash.js``` with the content of file ```object-hash-patch.js```  
**This is a temporary patch since the library does not find the sha256 algorithm, but it is necessary to investigate more how to solve this, maybe with crypto browserify**


* Start the process
```
npm start
```
