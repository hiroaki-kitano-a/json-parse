# 第一回勉強会　json-parse

GPTをフル活用したコードです。参考になればいいと思います。

## 実行コマンド
```
node parser.js
```
###　実行結果
```
Error parsing JSON: Cannot read properties of undefined (reading '0')
'{\n' +
  '  "originalTextValue": "Hello, how are you?",\n' +
  '  "hashValue": "5d41402abc4b2a76b9719d911017c592",\n' +
  '  "languageValue": "en",\n' +
  '  "ttlSecValue": null,\n' +
  '  "translatedTextValue": null\n' +
  '}'
test.txt
Processing 0.21 ms
Memory usage: 8808 bytes

'{\n' +
  '  "quiz": {\n' +
  '    "sport": {\n' +
  '      "q1": {\n' +
  '        "question": "Which one is correct team name in NBA?",\n' +
  '        "options": [\n' +
  '          "New York Bulls",\n' +
  '          "Los Angeles Kings",\n' +
  '          "Golden State Warriros",\n' +
  '          "Huston Rocket"\n' +
  '        ],\n' +
  '        "answer": "Huston Rocket"\n' +
  '      }\n' +
  '    },\n' +
  '    "maths": {\n' +
  '      "q1": {\n' +
  '        "question": "5 + 7 = ?",\n' +
  '        "options": [\n' +
  '          "10",\n' +
  '          "11",\n' +
  '          "12",\n' +
  '          "13"\n' +
  '        ],\n' +
  '        "answer": "12"\n' +
  '      },\n' +
  '      "q2": {\n' +
  '        "question": "12 - 8 = ?",\n' +
  '        "options": [\n' +
  '          "1",\n' +
  '          "2",\n' +
  '          "3",\n' +
  '          "4"\n' +
  '        ],\n' +
  '        "answer": "4"\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '}'
test2.txt
Processing 0.19 ms
Memory usage: 15392 bytes

'{\n' +
  '  "prizes": [\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize1",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Prize A: Tumbler",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "1 タンブラー",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "This tumbler is printed with illustrations of characters.\\nAlways with the characters",\n' +
  '      "stock": "49",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 1,\n' +
  '      "emission_probability": 3,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": true,\n' +
  '      "digital_content_url": null,\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": false\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize2",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Prize B Towel A",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "2 タオルA",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "Towel with character illustrations printed on it.\\nAlways with the characters!",\n' +
  '      "stock": "99",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 2,\n' +
  '      "emission_probability": 6,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": true,\n' +
  '      "digital_content_url": null,\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-09T06:30:29.232Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": false\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize3",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Prize B: Towel B",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "3 タオルB",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "Towel with character illustrations printed on it.\\nAlways with the characters!",\n' +
  '      "stock": "98",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 2,\n' +
  '      "emission_probability": 6,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": true,\n' +
  '      "digital_content_url": null,\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-12T06:01:05.490Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": false\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize6",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Digital products (audio)",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "デジタル商品（音声）",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "Description of digital product (audio)",\n' +
  '      "stock": "100",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01HDE4EJWWQG6ZE4KHAH1YWK1E.jpeg",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01HDE4ESX07QH5NX71D5GWWY95.jpeg",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 2,\n' +
  '      "emission_probability": 1,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": false,\n' +
  '      "digital_content_url": "https://3barc-digital-contents-dev.s3.ap-northeast-1.amazonaws.com/01HDE51QACE4YS9V7WRA8G9DZT.mp3",\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-12T06:01:05.490Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": true\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha2_prize6",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Digital products (audio)",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "デジタル商品（音声）",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "Description of digital product (audio)",\n' +
  '      "stock": "100",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01HDE4EJWWQG6ZE4KHAH1YWK1E.jpeg",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01HDE4ESX07QH5NX71D5GWWY95.jpeg",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 2,\n' +
  '      "emission_probability": 1,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": false,\n' +
  '      "digital_content_url": "https://3barc-digital-contents-dev.s3.ap-northeast-1.amazonaws.com/01HDE51QACE4YS9V7WRA8G9DZT.mp3",\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.620Z",\n' +
  '      "updated_at": "2024-04-08T12:07:43.620Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": true\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize4",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Prize C: Acrylic stand A",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "4 タオルA",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "This is an acrylic stand for the character A.\\nAlways with the character",\n' +
  '      "stock": "145",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 3,\n' +
  '      "emission_probability": 9,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": true,\n' +
  '      "digital_content_url": null,\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-09T06:30:29.232Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": false\n' +
  '    },\n' +
  '    {\n' +
  '      "id": "example_gacha1_prize5",\n' +
  '      "gacha_id": "example_gacha1",\n' +
  '      "prize_category_id": null,\n' +
  '      "name": "Prize C: Acrylic stand B",\n' +
  '      "identify_code": null,\n' +
  '      "picking_name": "5 アクリルスタンドB",\n' +
  '      "invoice_name": null,\n' +
  '      "hs_code": null,\n' +
  '      "description": "This is an acrylic stand for the character Mr. B.\\nAlways with the character",\n' +
  '      "stock": "147",\n' +
  '      "image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "pickup_image_url": "https://dev-507-assets.s3.ap-northeast-1.amazonaws.com/01G20DSVFDMP0HNHVB7ZBGX75S.webp",\n' +
  '      "secret_image_url": null,\n' +
  '      "pickup_weight": 3,\n' +
  '      "emission_probability": 9,\n' +
  '      "status": "selling",\n' +
  '      "is_delivery_required": true,\n' +
  '      "digital_content_url": null,\n' +
  '      "weight_unit": "g",\n' +
  '      "weight": 0,\n' +
  '      "prize_ticket_id": "ticket_1",\n' +
  '      "created_at": "2024-04-08T12:07:43.475Z",\n' +
  '      "updated_at": "2024-04-09T06:30:27.800Z",\n' +
  '      "deleted_at": null,\n' +
  '      "has_digital_content": false\n' +
  '    }\n' +
  '  ]\n' +
  '}'
test3.txt
Processing 7.99 ms
Memory usage: 217960 bytes

'{\n' +
  '  "nest1": [\n' +
  '    {\n' +
  '      "nest2": [\n' +
  '        {\n' +
  '          "nest3": [\n' +
  '            "a",\n' +
  '            "b",\n' +
  '            "c"\n' +
  '          ]\n' +
  '        },\n' +
  '        {\n' +
  '          "nest4": [\n' +
  '            1,\n' +
  '            37810,\n' +
  '            4121\n' +
  '          ]\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    {\n' +
  '      "nest5": {\n' +
  '        "nest6": [\n' +
  '          "hello"\n' +
  '        ]\n' +
  '      }\n' +
  '    },\n' +
  '    {\n' +
  '      "nest7": [\n' +
  '        [\n' +
  '          {\n' +
  '            "nest9": {\n' +
  '              "nest10": [\n' +
  '                "world"\n' +
  '              ]\n' +
  '            }\n' +
  '          }\n' +
  '        ]\n' +
  '      ]\n' +
  '    }\n' +
  '  ]\n' +
  '}'
test4.txt
Processing 0.24 ms
Memory usage: 12720 bytes

```
