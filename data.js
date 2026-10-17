var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004441126853475197,
          "pitch": 0.11715069374716336,
          "rotation": 4.71238898038469,
          "target": "1-hallway-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway-view-1",
      "name": "HALLWAY VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03107812294532586,
          "pitch": 0.2582246818768077,
          "rotation": 0,
          "target": "2-hallway-view-2"
        },
        {
          "yaw": 1.714121578198469,
          "pitch": 0.14118760115017892,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": -1.5825285513399265,
          "pitch": 0.12289146833495046,
          "rotation": 1.5707963267948966,
          "target": "3-main-floor-powder-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway-view-2",
      "name": "HALLWAY VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.38788675231938186,
          "pitch": 0.1569800904195997,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": -0.19083944358874483,
          "pitch": 0.11073874742151624,
          "rotation": 4.71238898038469,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -3.0871785974299524,
          "pitch": 0.22547979925730033,
          "rotation": 3.141592653589793,
          "target": "1-hallway-view-1"
        },
        {
          "yaw": 2.018150190435671,
          "pitch": 0.1386573752432838,
          "rotation": 7.853981633974483,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-floor-powder-room",
      "name": "MAIN FLOOR POWDER ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0652228856714867,
          "pitch": 0.07981304015526547,
          "rotation": 3.141592653589793,
          "target": "1-hallway-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6412763051279047,
          "pitch": 0.024365629365874497,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": 2.329428202872049,
          "pitch": 0.019194738778574916,
          "rotation": 0,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -2.758401853178068,
          "pitch": 0.1475571566906293,
          "rotation": 1.5707963267948966,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -3.0627758794272353,
          "pitch": 0.06049989245371101,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": -2.855728255457109,
          "pitch": 0.008461593140442147,
          "rotation": 0,
          "target": "2-hallway-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-greatroom-view-1",
      "name": "GREATROOM VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26662835423662123,
          "pitch": 0.15720861766310534,
          "rotation": 3.141592653589793,
          "target": "6-greatroom-view-2"
        },
        {
          "yaw": 1.000022632432879,
          "pitch": 0.05130811603963359,
          "rotation": 11.780972450961727,
          "target": "4-dining"
        },
        {
          "yaw": 1.5507123610848872,
          "pitch": 0.045740739035238676,
          "rotation": 0,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": 1.9062950933917095,
          "pitch": 0.12160067107792827,
          "rotation": 7.0685834705770345,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -1.3962490968175079,
          "pitch": 0.11196427707042389,
          "rotation": 0,
          "target": "2-hallway-view-2"
        },
        {
          "yaw": -1.7388633739681225,
          "pitch": 0.1159497740760429,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-greatroom-view-2",
      "name": "GREATROOM VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9486457042894825
      },
      "linkHotspots": [
        {
          "yaw": -0.5509280647279162,
          "pitch": 0.048770223483908026,
          "rotation": 1.5707963267948966,
          "target": "2-hallway-view-2"
        },
        {
          "yaw": -0.6888901906537921,
          "pitch": 0.04639890807124658,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": -1.3051533646217592,
          "pitch": 0.05608580060745183,
          "rotation": 0,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -1.759763234638685,
          "pitch": 0.05236013641468418,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": -2.6212214277357653,
          "pitch": 0.15413928445276603,
          "rotation": 4.71238898038469,
          "target": "4-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen-view-1",
      "name": "KITCHEN VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33940924897271074,
          "pitch": 0.09187216812522792,
          "rotation": 3.141592653589793,
          "target": "8-kitchen-view-2"
        },
        {
          "yaw": -0.689106711350739,
          "pitch": 0.12277836652269691,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": -1.746175493250579,
          "pitch": 0.13476239716763416,
          "rotation": 4.71238898038469,
          "target": "6-greatroom-view-2"
        },
        {
          "yaw": -2.9092488870089923,
          "pitch": 0.11207300148078403,
          "rotation": 1.5707963267948966,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -3.1370452923564436,
          "pitch": 0.07063346412154914,
          "rotation": 6.283185307179586,
          "target": "2-hallway-view-2"
        },
        {
          "yaw": 2.942431257342582,
          "pitch": 0.1294075148445053,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": 1.760395900353413,
          "pitch": 0.11516102409063045,
          "rotation": 0,
          "target": "10-landing-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen-view-2",
      "name": "KITCHEN VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.117114686029142,
          "pitch": 0.06490958937244429,
          "rotation": 7.853981633974483,
          "target": "4-dining"
        },
        {
          "yaw": -2.9112644247674986,
          "pitch": 0.1372217340325399,
          "rotation": 3.141592653589793,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": -3.0965855118570857,
          "pitch": -0.011749561036129563,
          "rotation": 5.497787143782138,
          "target": "10-landing-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.022202329748180816,
          "pitch": 0.022197030760644054,
          "rotation": 0.7853981633974483,
          "target": "10-landing-view-1"
        },
        {
          "yaw": 0.9501980962310057,
          "pitch": 0.12460879108720846,
          "rotation": 3.141592653589793,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": -0.6295015998173579,
          "pitch": 0.05379641520464418,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": -1.9575160656602328,
          "pitch": 0.10261489676627278,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": 1.2135308388059318,
          "pitch": 0.08949747589996804,
          "rotation": 0,
          "target": "2-hallway-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-landing-view-1",
      "name": "LANDING VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.026640639475683514,
          "pitch": -0.17575105886591302,
          "rotation": 0,
          "target": "11-landing-view-2"
        },
        {
          "yaw": 1.5135822298699155,
          "pitch": 0.7815348532522357,
          "rotation": 3.141592653589793,
          "target": "9-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-landing-view-2",
      "name": "LANDING VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09079338715925545,
          "pitch": -0.09918792884378647,
          "rotation": 0,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": 1.3693714892943412,
          "pitch": 0.44006937748009634,
          "rotation": 3.141592653589793,
          "target": "10-landing-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upstair-view-1",
      "name": "UPSTAIR VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.40113454832594897,
          "pitch": 0.13812792093179738,
          "rotation": 4.71238898038469,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": 0.31351225940878535,
          "pitch": 0.02112026680035939,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        },
        {
          "yaw": 0.9566486320247609,
          "pitch": 0.05851168059996503,
          "rotation": 1.5707963267948966,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-upstair-view-2",
      "name": "UPSTAIR VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.013323092557396166,
          "pitch": 0.12152156621842991,
          "rotation": 0,
          "target": "14-upstair-view-3"
        },
        {
          "yaw": 0.1790912802564968,
          "pitch": 0.2087742753489934,
          "rotation": 1.5707963267948966,
          "target": "16-laundry"
        },
        {
          "yaw": -2.8987013826491506,
          "pitch": 0.1645136627020527,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": 1.9935094108756415,
          "pitch": 0.0621917422675331,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-upstair-view-3",
      "name": "UPSTAIR VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.033296557044369735,
          "pitch": 0.07752208838489594,
          "rotation": 0,
          "target": "23-bedroom-2-view-1"
        },
        {
          "yaw": -0.2353591623921094,
          "pitch": 0.12881956250465976,
          "rotation": 4.71238898038469,
          "target": "26-bedroom-3-view-1"
        },
        {
          "yaw": 0.16070455396961592,
          "pitch": 0.13076758316149295,
          "rotation": 1.5707963267948966,
          "target": "28-bathroom"
        },
        {
          "yaw": -3.030461493549941,
          "pitch": 0.04957787508430478,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": 2.6651207409301314,
          "pitch": 0.016326798211082405,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        },
        {
          "yaw": -2.5526943528141075,
          "pitch": 0.03409773816608208,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bonus-room",
      "name": "BONUS ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.102537210667533,
          "pitch": 0.007801128101297294,
          "rotation": 3.141592653589793,
          "target": "11-landing-view-2"
        },
        {
          "yaw": -0.6337137426394648,
          "pitch": 0.04684267223896299,
          "rotation": 1.5707963267948966,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": -1.7085999219693484,
          "pitch": 0.023665617601185573,
          "rotation": 4.71238898038469,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-laundry",
      "name": "LAUNDRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9049063617692576,
          "pitch": 0.08589272335332865,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": 2.5570232212196498,
          "pitch": -0.0066007796700695565,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": -1.500562480442257,
          "pitch": 0.0342120876815617,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-primary-bedroom-view-1",
      "name": "PRIMARY BEDROOM VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30747196125988374,
          "pitch": 0.048639782032783074,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -0.9851972890540033,
          "pitch": -0.030040727561168268,
          "rotation": 4.71238898038469,
          "target": "20-ensuite-view-1"
        },
        {
          "yaw": -1.5154057641773147,
          "pitch": 0.034648797166518364,
          "rotation": 4.71238898038469,
          "target": "19-walk-in-closet-primary-bedroom"
        },
        {
          "yaw": 1.9572857090410896,
          "pitch": 0.04311503698500729,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": 2.36493026983932,
          "pitch": 0.0265491078506912,
          "rotation": 0,
          "target": "13-upstair-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-primary-bedroom-view-2",
      "name": "PRIMARY BEDROOM VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23994655590014347,
          "pitch": 0.02591112145670138,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": -0.03973319938459419,
          "pitch": 0.022824102166383753,
          "rotation": 7.853981633974483,
          "target": "19-walk-in-closet-primary-bedroom"
        },
        {
          "yaw": 0.5489885692940977,
          "pitch": 0.001105989265536067,
          "rotation": 1.5707963267948966,
          "target": "20-ensuite-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-walk-in-closet-primary-bedroom",
      "name": "WALK IN CLOSET (PRIMARY BEDROOM)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4487446178557377,
          "pitch": -0.013322241632325316,
          "rotation": 7.853981633974483,
          "target": "22-ensuite-view-3"
        },
        {
          "yaw": -0.9133691246783382,
          "pitch": 0.40862068732403856,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": -0.941949131377184,
          "pitch": 0.015023920356384224,
          "rotation": 0,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": -1.1433935143150542,
          "pitch": 0.06423039114252838,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": 1.836421840118521,
          "pitch": -0.04217799142206147,
          "rotation": 4.71238898038469,
          "target": "20-ensuite-view-1"
        },
        {
          "yaw": 2.700982293884236,
          "pitch": 0.06954512731218188,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ensuite-view-1",
      "name": "ENSUITE VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01776275583084619,
          "pitch": 0.07755214420557088,
          "rotation": 1.5707963267948966,
          "target": "21-ensuite-view-2"
        },
        {
          "yaw": -0.6894007438221266,
          "pitch": 0.07302242026464256,
          "rotation": 4.71238898038469,
          "target": "22-ensuite-view-3"
        },
        {
          "yaw": 2.451823210151826,
          "pitch": 0.12624852851293333,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -2.376728193136586,
          "pitch": 0.07852514350876305,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ensuite-view-2",
      "name": "ENSUITE VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.533352402125944,
          "pitch": 0.0632634975959725,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -2.782422545111487,
          "pitch": 0.07757571161966048,
          "rotation": 3.141592653589793,
          "target": "22-ensuite-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ensuite-view-3",
      "name": "ENSUITE VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008882135329967511,
          "pitch": 0.06209392566439753,
          "rotation": 0,
          "target": "21-ensuite-view-2"
        },
        {
          "yaw": 1.704841358767684,
          "pitch": 0.0887803538827594,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-2-view-1",
      "name": "BEDROOM 2 VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11425883485762078,
          "pitch": 0.05516354402448442,
          "rotation": 3.141592653589793,
          "target": "24-bedroom-2-view-2"
        },
        {
          "yaw": -1.0224972571017226,
          "pitch": 0.08146346856851672,
          "rotation": 10.995574287564278,
          "target": "25-walk-in-closet-bedroom-2"
        },
        {
          "yaw": 2.297651067155302,
          "pitch": 0.06330923323747939,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-2-view-2",
      "name": "BEDROOM 2 VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.011102444639577769,
          "pitch": 0.07755962923718585,
          "rotation": 4.71238898038469,
          "target": "14-upstair-view-3"
        },
        {
          "yaw": 0.6133550282566969,
          "pitch": 0.0905426221867387,
          "rotation": 1.5707963267948966,
          "target": "25-walk-in-closet-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-walk-in-closet-bedroom-2",
      "name": "WALK IN CLOSET (BEDROOM 2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.570267500219778,
          "pitch": 0.08169138021812117,
          "rotation": 3.141592653589793,
          "target": "24-bedroom-2-view-2"
        },
        {
          "yaw": -1.149156855516793,
          "pitch": 0.15042392021455342,
          "rotation": 0.7853981633974483,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-3-view-1",
      "name": "BEDROOM 3 VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4856682870988269,
          "pitch": 0.08683822582391088,
          "rotation": 3.141592653589793,
          "target": "27-bedroom-3-view-2"
        },
        {
          "yaw": -1.6501777507594895,
          "pitch": 0.07635078766928771,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bedroom-3-view-2",
      "name": "BEDROOM 3 VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4154353832552573,
          "pitch": 0.1287018360465666,
          "rotation": 1.5707963267948966,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.166583400747152,
          "pitch": 0.012415760067057136,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-basement-greatroom",
      "name": "BASEMENT GREATROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2982825385597696,
          "pitch": -0.04576413678782565,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        },
        {
          "yaw": 2.526035267328256,
          "pitch": -0.010761940617468824,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": 1.947359787927578,
          "pitch": 0.017978291273392344,
          "rotation": 0,
          "target": "32-basement-bathroom"
        },
        {
          "yaw": 1.5349697002518514,
          "pitch": 0.02223281269276356,
          "rotation": 0,
          "target": "31-basement-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-basement-kitchen",
      "name": "BASEMENT KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5832036575013113,
          "pitch": 0.0776708144877265,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -2.760043331657128,
          "pitch": 0.04750923283831021,
          "rotation": 0,
          "target": "32-basement-bathroom"
        },
        {
          "yaw": -2.930632174957875,
          "pitch": 0.04998681577823305,
          "rotation": 0,
          "target": "31-basement-bedroom"
        },
        {
          "yaw": -3.0392053731759834,
          "pitch": 0.15647432699122277,
          "rotation": 4.71238898038469,
          "target": "29-basement-greatroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-basement-bedroom",
      "name": "BASEMENT BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.58427165144888,
          "pitch": -0.014094065348393414,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        },
        {
          "yaw": 2.745810781905689,
          "pitch": 0.08609362650846464,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -2.8344455937362962,
          "pitch": 0.10447681348373727,
          "rotation": 1.5707963267948966,
          "target": "29-basement-greatroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-basement-bathroom",
      "name": "BASEMENT BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.340890837548372,
          "pitch": 0.08905633352056697,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": 2.792383716745272,
          "pitch": 0.09766835428411369,
          "rotation": 1.5707963267948966,
          "target": "29-basement-greatroom"
        },
        {
          "yaw": 2.9497182140338136,
          "pitch": -0.01647073825753509,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BIRKLEY 360 WALKTHROUGH",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
