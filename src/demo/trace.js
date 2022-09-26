
export  const demoApiarios = [{
    name: "Apiario CM 7 | CAMPO AMOR (4230) - SE",
    geolocation: "-28.63491,-64.40391",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}, {
    name: "Apiario CM 8 | CAMPO AMOR (4230) - SE",
    geolocation: "-28,63267,-64,40334",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}, {
    name: "Apiario CM 9 | CAMPO AMOR (4230) - SE",
    geolocation: " -28,63267,-64,41022",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}];

/* Agregar a cada stage/events en location donde ocurrio */

export  const demoTrace = {
    stages: [
        {
            bussinessDescription: "Fraccionado",
            stage: " - Nro de lote - Nro partida",
            date: "",
            inputs: [
                "Entrada tambor xx - de donde viene",
                "Entrada tambor yy - de donde viene",
                "Entrada tambor zz - de donde viene",
            ]
        },
        {
            bussinessDescription: "Homogeneizado",
            stage: "Nro de lote - Nro partida",
            date: "",
            inputs: [
                "Entrada tambor x - de donde viene",
                "Entrada tambor y - de donde viene",
                "Entrada tambor z - de donde viene",
            ]
        },
        {
            bussinessDescription: "Extracción",
            stage: " tambor x - Nro de lote - Nro partida",
            date: "",
            inputs: [
                "Alza a", //Estos estan asociados a un remito
                "Alza b",
                "Alza c",
            ]

        },
        {
            bussinessDescription: "Extracción",
            stage: " tambor y - Nro de lote - Nro partida - fecha",
            inputs: [
                "Alza x",
                "Alza y",
                "Alza z",
            ]
        },
        {
            bussinessDescription: "Ingreso",
            stage: "Ingreso tambor z - Nro de lote - Nro partida - fecha",
            inputs: [
                "Apiario 1 - id del apiario, ubicación aproximada, productor",
                "Apiario 2 - id del apiario, ubicación aproximada , productor",
                "Apiario 3 - id del apiario, ubicación aproximada , productor",
            ]

        }
    ],
    inputs: [
        "Apiario 1 - id del apiario, ubicación aproximada, productor",
        "Apiario 2 - id del apiario, ubicación aproximada, productor",
        "Apiario 3 - id del apiario, ubicación aproximada, productor",
    ]
}


export  const demoProduct = {
    name: "Miel orgánica monoflora de Atamisqui Wayra 440Gr",
    lot: "2123",
    consignment: "20200812102834140",
    expirationDate: "12/08/2022"
}

