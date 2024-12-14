export let data = () => {
    return [
        {
            "usuario": {
                "id": "1",
                "nombre": "Carlos Alberto Pérez",
                "documento": {
                    "tipo": "CC",
                    "numero": "1012345678"
                },
                "fecha_nacimiento": "1985-07-15",
                "estado_civil": "Soltero",
                "nivel_educativo": "Profesional"
            },
            "informacion_crediticia": {
                "score_credito": 720,
                "comportamiento_pago": {
                    "total_creditos": 5,
                    "creditos_al_dia": 4,
                    "creditos_en_mora": 1,
                    "dias_mora_promedio": 30
                },
                "creditos": [
                    {
                        "tipo": "Tarjeta de crédito",
                        "entidad": "Banco ABC",
                        "numero": "**** **** **** 1234",
                        "limite": 5000000,
                        "saldo_actual": 1500000,
                        "estado": "Activo"
                    },
                    {
                        "tipo": "Crédito de vehículo",
                        "entidad": "Financiera XYZ",
                        "monto_original": 30000000,
                        "saldo_actual": 12000000,
                        "estado": "Activo"
                    }
                ],
                "reportes_negativos": [
                    {
                        "fecha": "2023-05-10",
                        "entidad": "Tienda de Electrodomésticos LMN",
                        "monto": 250000,
                        "estado": "En mora",
                        "comentario": "Pago atrasado por más de 30 días."
                    }
                ]
            }
        },
        {
            "usuario": {
                "id": "2",
                "nombre": "Ana María López",
                "documento": {
                    "tipo": "CC",
                    "numero": "1023456789"
                },
                "fecha_nacimiento": "1990-03-22",
                "estado_civil": "Casada",
                "nivel_educativo": "Maestría"
            },
            "informacion_crediticia": {
                "score_credito": 800,
                "comportamiento_pago": {
                    "total_creditos": 3,
                    "creditos_al_dia": 3,
                    "creditos_en_mora": 0,
                    "dias_mora_promedio": 0
                },
                "creditos": [
                    {
                        "tipo": "Crédito hipotecario",
                        "entidad": "Banco DEF",
                        "monto_original": 250000000,
                        "saldo_actual": 200000000,
                        "estado": "Activo"
                    },
                    {
                        "tipo": "Tarjeta de crédito",
                        "entidad": "Banco GHI",
                        "numero": "**** **** **** 5678",
                        "limite": 10000000,
                        "saldo_actual": 2000000,
                        "estado": "Activo"
                    }
                ],
                "reportes_negativos": []
            }
        },
        {
            "usuario": {
                "id": "3",
                "nombre": "Luis Eduardo Martínez",
                "documento": {
                    "tipo": "CC",
                    "numero": "1034567890"
                },
                "fecha_nacimiento": "1982-01-12",
                "estado_civil": "Divorciado",
                "nivel_educativo": "Secundaria"
            },
            "informacion_crediticia": {
                "score_credito": 650,
                "comportamiento_pago": {
                    "total_creditos": 4,
                    "creditos_al_dia": 3,
                    "creditos_en_mora": 1,
                    "dias_mora_promedio": 45
                },
                "creditos": [
                    {
                        "tipo": "Préstamo personal",
                        "entidad": "Banco JKL",
                        "monto_original": 10000000,
                        "saldo_actual": 3000000,
                        "estado": "Activo"
                    },
                    {
                        "tipo": "Crédito educativo",
                        "entidad": "Instituto MNO",
                        "monto_original": 15000000,
                        "saldo_actual": 0,
                        "estado": "Pagado"
                    }
                ],
                "reportes_negativos": [
                    {
                        "fecha": "2022-08-15",
                        "entidad": "Comercio XYZ",
                        "monto": 500000,
                        "estado": "En mora",
                        "comentario": "Deuda vencida hace más de 60 días."
                    }
                ]
            }
        },
        {
            "usuario": {
                "id": "4",
                "nombre": "María Fernanda Rojas",
                "documento": {
                    "tipo": "CC",
                    "numero": "1045678901"
                },
                "fecha_nacimiento": "1995-05-30",
                "estado_civil": "Soltera",
                "nivel_educativo": "Profesional"
            },
            "informacion_crediticia": {
                "score_credito": 770,
                "comportamiento_pago": {
                    "total_creditos": 2,
                    "creditos_al_dia": 2,
                    "creditos_en_mora": 0,
                    "dias_mora_promedio": 0
                },
                "creditos": [
                    {
                        "tipo": "Crédito de consumo",
                        "entidad": "Banco PQR",
                        "monto_original": 5000000,
                        "saldo_actual": 1000000,
                        "estado": "Activo"
                    }
                ],
                "reportes_negativos": []
            }
        }
    ];
}

