example_create_product = {
    "Product": {
        "summary": "Продукт (Pro)",
        "value": {
            "tableType": "pro",
            "newProduct": {
                "isActive": False,
                "title": "name",
                "shortTitle": "shortName",
                "text1": "111",
                "text2": "222",
                "text3": "333",
                "notes": "пппп"
            }
        }
    },
    "Bas": {
        "summary": "Основа старицы (Bas)",
        "value": {
            "tableType": "bas",
            "newProduct": {
                "isActive": False,
                "title": "name",
                "width": 0.0,
                "weight": 0.0,
                "price": 0,
                "maxCount": 20,
                "text1": "111",
                "text2": "222",
                "text3": "333",
                "notes": "пппп",
                "pro_id": 3
            }
        }
    },
    "for": {
        "summary": "Формат (Format)",
        "value": {
            "tableType": "for",
            "newProduct": {
                "isActive": False,
                "title": "new_product_test_api",
                "img": "new_product_test_api",
                "price": 20,
                "basePrice": 10,
                "guides_jpeg": "new_product_test_api",
                "guides_psd": "new_product_test_api",
                "guides_indd": "new_product_test_api",
                "text1": "new_product_test_api",
                "text2": "new_product_test_api",
                "text3": "new_product_test_api",
                "size": "40x40",
                "notes": "new_product_test_api",
                "pro_id": 3
            }
        }
    },
    "nco": {
        "summary": "Направляющие для обложки (Nco)",
        "value": {
            "tableType": "nco",
            "newProduct": {
                "isActive": False,
                "format": "20x20",
                "width": 6,
                "size": "5551x2953",
                "weight": 10,
                "guides_jpeg": "jpeg",
                "guides_psd": "jpeg",
                "guides_lndd": "jpeg",
                "pro_id": 3
            }
        }
    },
    "pap": {
        "summary": "Бумага (Pap)",
        "value": {
            "tableType": "pap",
            "newProduct": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "width": 6.0,
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text",
                "pro_id": 3
            }
        }
    },
    "tco": {
        "summary": "Тип обложки (Tco)",
        "value": {
            "tableType": "tco",
            "newProduct": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "indicatorFormat": "6,7",
                "multiplier": 25,
                "width": 6.0,
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text",
                "pro_id": 3
            }
        }
    },
    "var01": {
        "summary": "Варианты обложки (Var01)",
        "value": {
            "tableType": "var",
            "newProduct": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text",
                "pro_id": 3
            }
        }
    }
}

example_delete_product = {
    "del": {
        "summary": "Удаление типа обложки",
        "value": {
            "tableType": "tco",
            "id": 3
        }
    }
}

example_upload_product = {
    "var01": {
        "summary": "Варианты обложки (Var01)",
        "value": {
            "tableType": "var",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text"
            }
        }
    },
    "Product": {
        "summary": "Продукт (Pro)",
        "value": {
            "tableType": "pro",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "title": "name",
                "shortTitle": "shortName",
                "text1": "111",
                "text2": "222",
                "text3": "333",
                "notes": "пппп"
            }
        }
    },
    "Bas": {
        "summary": "Основа старицы (Bas)",
        "value": {
            "tableType": "bas",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "title": "name",
                "width": 0.0,
                "weight": 0.0,
                "price": 0,
                "maxCount": 20,
                "text1": "111",
                "text2": "222",
                "text3": "333",
                "notes": "пппп"
            }
        }
    },
    "for": {
        "summary": "Формат (Format)",
        "value": {
            "tableType": "for",
            "id": 5,
            "updatedFields": {
                "isActive": False,
                "title": "new_product_test_api",
                "img": "new_product_test_api",
                "price": 20,
                "basePrice": 10,
                "guides_jpeg": "new_product_test_api",
                "guides_psd": "new_product_test_api",
                "guides_indd": "new_product_test_api",
                "text1": "new_product_test_api",
                "text2": "new_product_test_api",
                "text3": "new_product_test_api",
                "size": "40x40",
                "notes": "new_product_test_api"
            }
        }
    },
    "nco": {
        "summary": "Направляющие для обложки (Nco)",
        "value": {
            "tableType": "nco",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "format": "20x20",
                "width": 6,
                "size": "5551x2953",
                "weight": 10,
                "guides_jpeg": "jpeg",
                "guides_psd": "jpeg",
                "guides_lndd": "jpeg"
            }
        }
    },
    "pap": {
        "summary": "Бумага (Pap)",
        "value": {
            "tableType": "pap",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "width": 6.0,
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text"
            }
        }
    },
    "tco": {
        "summary": "Тип обложки (Tco)",
        "value": {
            "tableType": "tco",
            "id": 3,
            "updatedFields": {
                "isActive": False,
                "title": "new_product_test_api",
                "shortTitle": "shortName",
                "indicatorFormat": "6,7",
                "multiplier": 25,
                "width": 6.0,
                "text1": "test_text",
                "text2": "test_text",
                "text3": "test_text",
                "notes": "test_text"
            }
        }
    }
}

example_upload_user = {
    "user": {
        "summary": "Редактирование пользователя",
        "value": {
            "id": 7,
            "updatedFields": {
                "communicationRating": "111",
                "supportHistory": "111",
                "notebook": "111",
                "pickinessRating": "111",
                "mistakesCount": 1
            }
        }
    }
}
