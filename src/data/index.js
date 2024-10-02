const availableSuggestions = [{
        name: "مصر - Egypt",
        lat: 26.8206,
        lng: 30.8025
    },
    {
        name: "السعودية - Saudi Arabia",
        lat: 23.8859,
        lng: 45.0792
    },
    {
        name: "الإمارات - UAE",
        lat: 23.4241,
        lng: 53.8478
    },
    {
        name: "الأردن - Jordan",
        lat: 30.5852,
        lng: 36.2384
    },
    {
        name: "الكويت - Kuwait",
        lat: 29.3759,
        lng: 47.9774
    },
    {
        name: "قطر - Qatar",
        lat: 25.276987,
        lng: 51.520008
    },
    {
        name: "البحرين - Bahrain",
        lat: 26.0667,
        lng: 50.5577
    },
    {
        name: "عمان - Oman",
        lat: 21.5129,
        lng: 55.9233
    },
    {
        name: "العراق - Iraq",
        lat: 33.2232,
        lng: 43.6793
    },
    {
        name: "فلسطين - Palestine",
        lat: 31.9522,
        lng: 35.2332
    },
    {
        name: "لبنان - Lebanon",
        lat: 33.8547,
        lng: 35.8623
    },
    {
        name: "المغرب - Morocco",
        lat: 31.7917,
        lng: -7.0926
    },
    {
        name: "الجزائر - Algeria",
        lat: 28.0339,
        lng: 1.6596
    },
    {
        name: "تونس - Tunisia",
        lat: 33.8869,
        lng: 9.5375
    },
    {
        name: "السودان - Sudan",
        lat: 12.8628,
        lng: 30.2176
    },
    {
        name: "اليمن - Yemen",
        lat: 15.5525,
        lng: 48.5164
    },
    {
        name: "موريتانيا - Mauritania",
        lat: 20.2540,
        lng: -10.9408
    },
    {
        name: "ليبيا - Libya",
        lat: 26.3351,
        lng: 17.2284
    },
    {
        name: "سوريا - Syria",
        lat: 34.8021,
        lng: 38.9968
    },
    {
        name: "الصومال - Somalia",
        lat: 5.1521,
        lng: 46.1996
    },
    {
        name: "تركيا - Turkey",
        lat: 38.9637,
        lng: 35.2433
    },
    {
        name: "إندونيسيا - Indonesia",
        lat: -0.7893,
        lng: 113.9213
    },
    {
        name: "ماليزيا - Malaysia",
        lat: 4.2105,
        lng: 101.9758
    },
    {
        name: "باكستان - Pakistan",
        lat: 30.3753,
        lng: 69.3451
    },
    {
        name: "الهند - India",
        lat: 20.5937,
        lng: 78.9629
    },
    {
        name: "بنغلاديش - Bangladesh",
        lat: 23.685,
        lng: 90.3563
    },
    {
        name: "أفغانستان - Afghanistan",
        lat: 33.9391,
        lng: 67.7099
    },
    {
        name: "جنوب أفريقيا - South Africa",
        lat: -30.5595,
        lng: 22.9375
    },
    {
        name: "أستراليا - Australia",
        lat: -25.2744,
        lng: 133.7751
    },
    {
        name: "ألمانيا - Germany",
        lat: 51.1657,
        lng: 10.4515
    },
    {
        name: "فرنسا - France",
        lat: 46.6034,
        lng: 1.8883
    },
    {
        name: "المملكة المتحدة - UK",
        lat: 55.3781,
        lng: -3.4360
    },
    {
        name: "الولايات المتحدة - USA",
        lat: 37.0902,
        lng: -95.7129
    }
];

const governoratesEgypt = [{
        name: "القاهرة - Cairo",
        lat: 30.0331,
        lng: 31.2357
    },
    {
        name: "الجيزة - Giza",
        lat: 30.0152,
        lng: 31.2156
    },
    {
        name: "الإسكندرية - Alexandria",
        lat: 31.2156,
        lng: 29.9553
    },
    {
        name: "الشرقية - Sharqia",
        lat: 30.5894,
        lng: 31.4942
    },
    {
        name: "الغربية - Gharbia",
        lat: 30.8281,
        lng: 31.1777
    },
    {
        name: "الدقهلية - Dakahlia",
        lat: 31.3645,
        lng: 31.0363
    },
    {
        name: "المنوفية - Menoufia",
        lat: 30.4172,
        lng: 31.1040
    },
    {
        name: "الفيوم - Faiyum",
        lat: 29.3030,
        lng: 30.8465
    },
    {
        name: "بني سويف - Beni Suef",
        lat: 29.0732,
        lng: 31.0968
    },
    {
        name: "المنيا - Minya",
        lat: 28.0990,
        lng: 30.7585
    },
    {
        name: "أسيوط - Assiut",
        lat: 27.1805,
        lng: 31.1848
    },
    {
        name: "سوهاج - Sohag",
        lat: 26.8123,
        lng: 31.6941
    },
    {
        name: "قنا - Qena",
        lat: 26.1460,
        lng: 32.7185
    },
    {
        name: "الأقصر - Luxor",
        lat: 25.6872,
        lng: 32.6396
    },
    {
        name: "أسوان - Aswan",
        lat: 24.0970,
        lng: 32.8990
    },
    {
        name: "البحر الأحمر - Red Sea",
        lat: 26.7926,
        lng: 33.9305
    },
    {
        name: "جنوب سيناء - South Sinai",
        lat: 29.9754,
        lng: 34.0182
    },
    {
        name: "شمال سيناء - North Sinai",
        lat: 30.5945,
        lng: 33.8457
    },
    {
        name: "مرسى مطروح - Matrouh",
        lat: 31.3520,
        lng: 27.2382
    },
    {
        name: "الوادي الجديد - New Valley",
        lat: 25.6981,
        lng: 28.6588
    }
];

const governoratesSaudi = [{
        name: "الرياض - Riyadh",
        lat: 24.7136,
        lng: 46.6753
    },
    {
        name: "جدة - Jeddah",
        lat: 21.2854,
        lng: 39.2376
    },
    {
        name: "مكة المكرمة - Mecca",
        lat: 21.4225,
        lng: 39.8262
    },
    {
        name: "المدينة المنورة - Medina",
        lat: 24.4671,
        lng: 39.6116
    },
    {
        name: "الشرقية - Eastern Province",
        lat: 26.2379,
        lng: 50.2716
    },
    {
        name: "القصيم - Qassim",
        lat: 26.1735,
        lng: 43.5810
    },
    {
        name: "عسير - Asir",
        lat: 18.8781,
        lng: 42.5455
    },
    {
        name: "حائل - Ha'il",
        lat: 27.5119,
        lng: 41.6942
    },
    {
        name: "تبوك - Tabuk",
        lat: 28.3882,
        lng: 36.5879
    },
    {
        name: "الجوف - Al-Jouf",
        lat: 29.5250,
        lng: 40.3015
    },
    {
        name: "الباحة - Al-Baha",
        lat: 20.0040,
        lng: 41.4678
    },
    {
        name: "نجران - Najran",
        lat: 17.4900,
        lng: 44.1459
    },
    {
        name: "الحدود الشمالية - Northern Borders",
        lat: 30.1808,
        lng: 41.0127
    },
    {
        name: "مكة - Makkah",
        lat: 21.4225,
        lng: 39.8262
    }
];

const famousCitiesWorldwide = [{
        name: "نيويورك - New York",
        lat: 40.7128,
        lng: -74.0060
    },
    {
        name: "لندن - London",
        lat: 51.5074,
        lng: -0.1278
    },
    {
        name: "باريس - Paris",
        lat: 48.8566,
        lng: 2.3522
    },
    {
        name: "طوكيو - Tokyo",
        lat: 35.6762,
        lng: 139.6503
    },
    {
        name: "سيدني - Sydney",
        lat: -33.8688,
        lng: 151.2093
    },
    {
        name: "برلين - Berlin",
        lat: 52.5200,
        lng: 13.4050
    },
    {
        name: "مدريد - Madrid",
        lat: 40.4168,
        lng: -3.7038
    },
    {
        name: "روما - Rome",
        lat: 41.9028,
        lng: 12.4964
    },
    {
        name: "كوالالمبور - Kuala Lumpur",
        lat: 3.139,
        lng: 101.6869
    },
    {
        name: "بكين - Beijing",
        lat: 39.9042,
        lng: 116.4074
    },
    {
        name: "دبي - Dubai",
        lat: 25.276987,
        lng: 55.296249
    },
    {
        name: "كيب تاون - Cape Town",
        lat: -33.9249,
        lng: 18.4241
    },
    {
        name: "بوسطن - Boston",
        lat: 42.3601,
        lng: -71.0589
    },
    {
        name: "سوفولك - Suffolk",
        lat: 52.1570,
        lng: 1.0085
    },
    {
        name: "أثينا - Athens",
        lat: 37.9838,
        lng: 23.7275
    }
];

const centersEgypt = [{
        name: "البعيرات - Al-Bairat",
        lat: 25.6943,
        lng: 32.6371
    },
    {
        name: "الطود - Al-Tod",
        lat: 25.7243,
        lng: 32.5921
    },
    {
        name: "نجع المهيدات - Naj' al-Muhidat",
        lat: 25.7351,
        lng: 32.6032
    },
    {
        name: "الجمرك - Al-Gumrok",
        lat: 30.0310,
        lng: 31.2165
    },
    {
        name: "الشرق - Al-Sharq",
        lat: 30.0410,
        lng: 31.2100
    },
    {
        name: "العامرية - Al-Amiriya",
        lat: 30.0500,
        lng: 31.2465
    },
    {
        name: "العجمي - Al-Ajami",
        lat: 30.0150,
        lng: 29.9250
    },
    {
        name: "المنتزة - Al-Montazah",
        lat: 30.0062,
        lng: 29.8950
    },
    {
        name: "الوسط - Al-Wasat",
        lat: 30.0385,
        lng: 31.1550
    },
    {
        name: "برج العرب - Borg Al Arab",
        lat: 30.8828,
        lng: 29.6755
    },
    {
        name: "الإسماعيلية - Ismailia",
        lat: 30.5904,
        lng: 32.2654
    },
    {
        name: "التل الكبير - Tal Al-Kabir",
        lat: 30.6280,
        lng: 32.4000
    },
    {
        name: "القصاصين - Qassasin",
        lat: 30.6288,
        lng: 32.2021
    },
    {
        name: "القنطرة شرق - Qantara Sharq",
        lat: 30.6765,
        lng: 32.2198
    },
    {
        name: "القنطرة غرب - Qantara Gharb",
        lat: 30.6710,
        lng: 32.1450
    },
    {
        name: "أبو صوير - Abu Suwir",
        lat: 30.6085,
        lng: 32.2345
    },
    {
        name: "فايد - Fayed",
        lat: 30.5844,
        lng: 32.4568
    },
    {
        name: "الغردقة - Hurghada",
        lat: 27.2579,
        lng: 33.8111
    },
    {
        name: "القصير - Al-Qusair",
        lat: 26.1370,
        lng: 34.2060
    },
    {
        name: "راس غارب - Ras Gharib",
        lat: 26.6527,
        lng: 33.9058
    },
    {
        name: "سفاجا - Safaga",
        lat: 26.7464,
        lng: 33.9650
    },
    {
        name: "شلاتين - Shalatin",
        lat: 24.8587,
        lng: 35.0175
    },
    {
        name: "مرسى علم - Marsa Alam",
        lat: 25.0400,
        lng: 34.8861
    },
    {
        name: "الدلنجات - Delenjat",
        lat: 31.1017,
        lng: 30.5733
    },
    {
        name: "الرحمانية - Al-Rahmaniya",
        lat: 31.1341,
        lng: 30.3944
    },
    {
        name: "المحمودية - Al-Mahmudiya",
        lat: 31.0786,
        lng: 30.3890
    },
    {
        name: "النوبارية الجديدة - New Nubaria",
        lat: 30.8870,
        lng: 30.6418
    },
    {
        name: "ايتاي البارود - Itay al-Barud",
        lat: 31.0453,
        lng: 30.8877
    },
    {
        name: "أبو المطامير - Abu Matamir",
        lat: 31.0670,
        lng: 30.8191
    },
    {
        name: "أبو حمص - Abu Homs",
        lat: 31.1778,
        lng: 30.6942
    },
    {
        name: "إدكو - Edko",
        lat: 31.1590,
        lng: 30.6060
    },
    {
        name: "حوش عيسى - Hosh Issa",
        lat: 31.0461,
        lng: 30.7956
    },
    {
        name: "دمنهور - Damanhur",
        lat: 31.0344,
        lng: 30.4602
    },
    {
        name: "رشيد - Rashid",
        lat: 31.4551,
        lng: 30.4185
    },
    {
        name: "شبراخيت - Shubra Khit",
        lat: 31.0630,
        lng: 30.8500
    },
    {
        name: "كفر الدوار - Kafr El Dawar",
        lat: 30.9235,
        lng: 30.5865
    },
    {
        name: "كوم حمادة - Kom Hamada",
        lat: 30.8771,
        lng: 30.5688
    },
    {
        name: "وادي النطرون - Wadi Al-Natrun",
        lat: 30.5471,
        lng: 30.4961
    },
    {
        name: "اطفيح - Atfih",
        lat: 29.8821,
        lng: 31.2862
    },
    {
        name: "البدرشين - Badrashin",
        lat: 29.8283,
        lng: 31.2248
    },
    {
        name: "الدقي - Dokki",
        lat: 30.0477,
        lng: 31.2137
    },
    {
        name: "السادس من اكتوبر - 6th of October",
        lat: 6.2500,
        lng: 31.2500
    },
    {
        name: "الصف - Saf",
        lat: 29.7185,
        lng: 31.1686
    },
    {
        name: "العياط - Al Ayat",
        lat: 29.7238,
        lng: 31.2920
    },
    {
        name: "المهندسين - Mohandessin",
        lat: 30.0534,
        lng: 31.2159
    },
    {
        name: "الواحات البحرية - Al Wahat Al Bahariya",
        lat: 29.2465,
        lng: 30.5422
    },
    {
        name: "امبابة - Imbaba",
        lat: 30.1027,
        lng: 31.2086
    },
    {
        name: "حي الهرم - Heliopolis",
        lat: 30.0131,
        lng: 31.2025
    },
    {
        name: "حي فيصل - Faisal",
        lat: 29.9947,
        lng: 31.1845
    },
    {
        name: "مركز الجيزة - Giza Center",
        lat: 30.0131,
        lng: 31.2085
    },
    {
        name: "الجمالية - Al-Jamaleya",
        lat: 30.4115,
        lng: 31.4828
    },
    {
        name: "السنبلاوين - Senbelawain",
        lat: 30.4291,
        lng: 31.2891
    },
    {
        name: "الكردي - Al-Kurdi",
        lat: 30.4455,
        lng: 31.2782
    },
    {
        name: "المطرية - Al-Matariya",
        lat: 30.3019,
        lng: 31.2803
    },
    {
        name: "المنزلة - Al-Mansoura",
        lat: 30.4700,
        lng: 31.2110
    },
    {
        name: "المنصورة - Al-Mansura",
        lat: 31.0344,
        lng: 31.4914
    },
    {
        name: "أجا - Aja",
        lat: 31.0770,
        lng: 31.3185
    },
    {
        name: "بلقاس - Belqas",
        lat: 31.0836,
        lng: 31.4985
    },
    {
        name: "بنى عبيد - Bani Obaid",
        lat: 31.0352,
        lng: 31.3632
    },
    {
        name: "تمى الأمديد - Tama al-Amidid",
        lat: 31.1453,
        lng: 31.3394
    },
    {
        name: "جمصة - Gamasa",
        lat: 31.4541,
        lng: 31.5450
    },
    {
        name: "دكرنس - Dekernes",
        lat: 31.0417,
        lng: 31.5350
    },
    {
        name: "شربين - Sherbin",
        lat: 31.0665,
        lng: 31.4410
    },
    {
        name: "طلخا - Talkha",
        lat: 31.2278,
        lng: 31.4361
    },
    {
        name: "منية النصر - Menia Nasr",
        lat: 31.0988,
        lng: 31.3825
    },
    {
        name: "ميت سلسيل - Mit Salsil",
        lat: 31.0465,
        lng: 31.4688
    },
    {
        name: "ميت غمر - Mit Ghamr",
        lat: 31.1864,
        lng: 31.3145
    },
    {
        name: "نبروه - Nabrouh",
        lat: 31.0586,
        lng: 31.3883
    },
    {
        name: "الحي الأول - First District",
        lat: 30.0743,
        lng: 31.2036
    },
    {
        name: "الحي التاسع - Ninth District",
        lat: 30.0750,
        lng: 31.2065
    },
    {
        name: "الحي الثالث - Third District",
        lat: 30.0752,
        lng: 31.2017
    },
    {
        name: "الحي الثامن - Eighth District",
        lat: 30.0748,
        lng: 31.2050
    },
    {
        name: "الحي الثاني - Second District",
        lat: 30.0740,
        lng: 31.2025
    },
    {
        name: "الحي الثاني عشر - Twelfth District",
        lat: 30.0741,
        lng: 31.2040
    },
    {
        name: "الحي الحادي عشر - Eleventh District",
        lat: 30.0755,
        lng: 31.2082
    },
    {
        name: "الحي الخامس - Fifth District",
        lat: 30.0756,
        lng: 31.2060
    },
    {
        name: "الحي الرابع - Fourth District",
        lat: 30.0744,
        lng: 31.2075
    },
    {
        name: "الحي السابع - Seventh District",
        lat: 30.0749,
        lng: 31.2087
    },
    {
        name: "الحي السادس - Sixth District",
        lat: 30.0747,
        lng: 31.2010
    },
    {
        name: "الحي العاشر - Tenth District",
        lat: 30.0742,
        lng: 31.2038
    },
    {
        name: "الأربعين - Al-Arbaeen",
        lat: 30.0666,
        lng: 31.2742
    },
    {
        name: "الجناين - Al-Janain",
        lat: 30.0733,
        lng: 31.2367
    },
    {
        name: "السويس - Suez",
        lat: 30.5852,
        lng: 32.2654
    },
    {
        name: "عتاقة - Ataka",
        lat: 30.5717,
        lng: 32.2512
    },
    {
        name: "الإبراهيمية - Al-Ibrahimiyya",
        lat: 30.5478,
        lng: 31.3933
    },
    {
        name: "الحسينية - Al-Husseiniya",
        lat: 30.3033,
        lng: 31.4923
    },
    {
        name: "الزقازيق - Zagazig",
        lat: 30.5892,
        lng: 31.5030
    },
    {
        name: "الصالحية - Al-Salihiya",
        lat: 30.6167,
        lng: 31.8688
    },
    {
        name: "العاشر من رمضان - 10th of Ramadan",
        lat: 30.3691,
        lng: 31.5893
    },
    {
        name: "القرين - Al-Qurain",
        lat: 30.5130,
        lng: 31.7065
    },
    {
        name: "القنايات - Al-Qanayaat",
        lat: 30.6221,
        lng: 31.6370
    },
    {
        name: "أبو حماد - Abu Hamad",
        lat: 30.6171,
        lng: 31.4228
    },
    {
        name: "أبو كبير - Abu Kabir",
        lat: 30.6166,
        lng: 31.4375
    },
    {
        name: "أولاد صقر - Awlad Saqr",
        lat: 30.6998,
        lng: 31.3883
    },
    {
        name: "بلبيس - Belbeis",
        lat: 30.5900,
        lng: 31.6183
    },
    {
        name: "ديرب نجم - Deirb Negm",
        lat: 30.4695,
        lng: 31.3708
    },
    {
        name: "فاقوس - Faqous",
        lat: 30.5392,
        lng: 31.5338
    },
    {
        name: "كفر صقر - Kafr Sakr",
        lat: 30.4603,
        lng: 31.4262
    },
    {
        name: "مشتول السوق - Mushtool El Souq",
        lat: 30.3092,
        lng: 31.4928
    },
    {
        name: "منيا القمح - Menia Qamh",
        lat: 30.6003,
        lng: 31.5535
    },
    {
        name: "ههيا - Hihya",
        lat: 30.5400,
        lng: 31.3011
    },
    {
        name: "السنطة - Senta",
        lat: 30.5740,
        lng: 31.3405
    },
    {
        name: "المحلة الكبرى - Mahalla Al-Kubra ",
        lat: 30.9622,
        lng: 31.1287
    },
    {
        name: "بسيون - Basion",
        lat: 30.8954,
        lng: 31.0462
    },
    {
        name: "زفتى - Zifta",
        lat: 30.7669,
        lng: 31.2505
    },
    {
        name: "سمنود - Samanoud",
        lat: 30.8313,
        lng: 31.2791
    },
    {
        name: "طنطا - حي أول - Tanta - First District",
        lat: 30.5860,
        lng: 31.2205
    },
    {
        name: "طنطا - حي ثاني - Tanta - Second District",
        lat: 30.5862,
        lng: 31.2210
    },
    {
        name: "قطور - Qatur",
        lat: 30.8556,
        lng: 31.2461
    },
    {
        name: "كفر الزيات - Kafr El-Zayat",
        lat: 30.8950,
        lng: 31.2497
    },
    {
        name: "الفيوم - Faiyum",
        lat: 29.3030,
        lng: 30.8436
    },
    {
        name: "أبشواي - Abshway",
        lat: 29.5069,
        lng: 30.8603
    },
    {
        name: "أطسا - Atfs",
        lat: 29.5460,
        lng: 30.9164
    },
    {
        name: "سنورس - Senours",
        lat: 29.5269,
        lng: 30.8773
    },
    {
        name: "طامية - Tamia",
        lat: 29.5033,
        lng: 30.8342
    },
    {
        name: "البساتين- Al-Basateen ",
        lat: 30.0671,
        lng: 31.2377
    },
    {
        name: "ودار السلام -  Dar Al-Salam",
        lat: 30.0671,
        lng: 31.2377
    },
    {
        name: "التبين - Tebin",
        lat: 30.0234,
        lng: 31.3271
    },
    {
        name: "الخليفة و المقطم - Al-Khalifa and Mokattam",
        lat: 30.0341,
        lng: 31.2598
    },
    {
        name: "الزاوية الحمراء - Al-Zawiya Al-Hamra",
        lat: 30.1645,
        lng: 31.2932
    },
    {
        name: "الزيتون - Zeitoun",
        lat: 30.0630,
        lng: 31.2877
    },
    {
        name: "الساحل - Al-Sahel",
        lat: 30.2999,
        lng: 31.5699
    },
    {
        name: "السلام - Al-Salam",
        lat: 30.1974,
        lng: 31.4574
    },
    {
        name: "السيدة زينب - Sayyida Zainab",
        lat: 30.0303,
        lng: 31.2411
    },
    {
        name: "الشرابية - Shobra Al-Khaymah",
        lat: 30.1255,
        lng: 31.2605
    },
    {
        name: "المرج - Al-Marj",
        lat: 30.1653,
        lng: 31.3385
    },
    {
        name: "المطرية - Al-Matariya",
        lat: 30.3019,
        lng: 31.2803
    },
    {
        name: "المعادي - Maadi",
        lat: 29.9675,
        lng: 31.2313
    },
    {
        name: "الموسكي - Mouski",
        lat: 30.0448,
        lng: 31.2354
    },
    {
        name: "النزهة - Al-Nazha",
        lat: 30.1020,
        lng: 31.3135
    },
    {
        name: "الوايلي - Al-Waily",
        lat: 30.0834,
        lng: 31.2512
    },
    {
        name: "باب الشعرية - Bab Al-Sharia",
        lat: 30.0413,
        lng: 31.2504
    },
    {
        name: "حدائق القبة - Hadaiq Al-Quba",
        lat: 30.0933,
        lng: 31.2573
    },
    {
        name: "حلوان - Helwan",
        lat: 29.8884,
        lng: 31.3004
    },
    {
        name: "روض الفرج - Rod El Farag",
        lat: 30.1612,
        lng: 31.2399
    },
    {
        name: "شبرا - Shubra",
        lat: 30.0791,
        lng: 31.2383
    },
    {
        name: "عابدين - Abdeen",
        lat: 30.0465,
        lng: 31.2355
    },
    {
        name: "عين شمس - Ain Shams",
        lat: 30.0805,
        lng: 31.2814
    },
    {
        name: "غرب القاهرة - West Cairo",
        lat: 30.0345,
        lng: 31.1833
    },
    {
        name: "مدينة نصر - شرق - Nasr City - East",
        lat: 30.0615,
        lng: 31.3143
    },
    {
        name: "مدينة نصر - غرب - Nasr City - West",
        lat: 30.0622,
        lng: 31.3052
    },
    {
        name: "مصر الجديدة - Heliopolis",
        lat: 30.0664,
        lng: 31.3391
    },
    {
        name: "مصر القديمة - Old Cairo",
        lat: 30.0233,
        lng: 31.2450
    },
    {
        name: "منشأة ناصر - Manshiyat Naser",
        lat: 30.0362,
        lng: 31.2653
    },
    {
        name: "وسط القاهرة - Downtown Cairo",
        lat: 30.0444,
        lng: 31.2357
    },
    {
        name: "الخانكة - Khanka",
        lat: 30.1458,
        lng: 31.2846
    },
    {
        name: "القناطر الخيرية - Qalyubia",
        lat: 30.2231,
        lng: 31.2701
    },
    {
        name: "بنها العسل - Banha Al-Asal",
        lat: 30.4675,
        lng: 31.2182
    },
    {
        name: "شبرا الخيمة - Shubra El Kheima",
        lat: 30.1300,
        lng: 31.2453
    },
    {
        name: "شبين القناطر - Shebin Al-Qanater",
        lat: 30.1890,
        lng: 31.3066
    },
    {
        name: "طوخ - Toukh",
        lat: 30.2445,
        lng: 31.2245
    },
    {
        name: "قليوب - Qalyub",
        lat: 30.1869,
        lng: 31.2058
    },
    {
        name: "كفر شكر - Kafr Shukr",
        lat: 30.2047,
        lng: 31.2352
    },
    {
        name: "الباجور - Al-Bajour",
        lat: 30.6123,
        lng: 31.2217
    },
    {
        name: "الشهداء - Al-Shehadah",
        lat: 30.5842,
        lng: 31.2116
    },
    {
        name: "أشمون - Ashmoun",
        lat: 30.6295,
        lng: 31.1324
    },
    {
        name: "بركة السبع - Berket Al Sabaa",
        lat: 30.5757,
        lng: 31.1577
    },
    {
        name: "تلا - Tala",
        lat: 30.6766,
        lng: 31.3158
    },
    {
        name: "سرس الليان - Sars El-Layan",
        lat: 30.4931,
        lng: 31.0981
    },
    {
        name: "شبين الكوم - Shebin El-Kom",
        lat: 30.5830,
        lng: 31.0420
    },
    {
        name: "قويسنا - Quesna",
        lat: 30.5967,
        lng: 31.1077
    },
    {
        name: "مدينة السادات - Sadat City",
        lat: 30.5866,
        lng: 30.5319
    },
    {
        name: "منوف - Menouf",
        lat: 30.4543,
        lng: 31.0683
    },
    {
        name: "العدوة - Al-Adwa",
        lat: 30.5357,
        lng: 31.0297
    },
    {
        name: "المنيا - Minya",
        lat: 28.1026,
        lng: 30.7504
    },
    {
        name: "المنيا الجديدة - New Minya",
        lat: 28.1162,
        lng: 30.7479
    },
    {
        name: "أبو قرقاص - Abu Qurqas",
        lat: 28.0350,
        lng: 30.8091
    },
    {
        name: "بني مزار - Beni Mazar",
        lat: 28.2500,
        lng: 30.7575
    },
    {
        name: "دير مواس - Deir Mawas",
        lat: 28.0691,
        lng: 30.7853
    },
    {
        name: "سمالوط - Samalout",
        lat: 28.2512,
        lng: 30.8027
    },
    {
        name: "مطاي - Matai",
        lat: 28.1619,
        lng: 30.7032
    },
    {
        name: "مغاغة - Maghagha",
        lat: 28.0773,
        lng: 30.7630
    },
    {
        name: "ملوي - Malawy",
        lat: 27.9770,
        lng: 30.7467
    },
    {
        name: "الخارجة - Kharga",
        lat: 25.4447,
        lng: 30.5883
    },
    {
        name: "الداخلة - Dakhla",
        lat: 25.6461,
        lng: 30.5064
    },
    {
        name: "الفرافرة - Farafra",
        lat: 27.2302,
        lng: 29.2030
    },
    {
        name: "أسوان - Aswan",
        lat: 24.0927,
        lng: 32.8990
    },
    {
        name: "إدفو - Edfu",
        lat: 24.3808,
        lng: 32.8793
    },
    {
        name: "دراو - Daraw",
        lat: 24.2778,
        lng: 32.8269
    },
    {
        name: "كوم امبو - Kom Ombo",
        lat: 24.1242,
        lng: 32.9214
    },
    {
        name: "نصر النوبة - Nasr Al-Nuba",
        lat: 24.1190,
        lng: 32.7887
    },
    {
        name: "البداري - Al-Badari",
        lat: 27.3698,
        lng: 31.5461
    },
    {
        name: "الغنايم - Al-Ghinaim",
        lat: 27.3735,
        lng: 31.1853
    },
    {
        name: "الفتح - Al-Fath",
        lat: 27.2592,
        lng: 31.5001
    },
    {
        name: "أبنوب - Abnoub",
        lat: 27.3240,
        lng: 31.1216
    },
    {
        name: "أبو تيج - Abu Tige",
        lat: 27.3646,
        lng: 31.2024
    },
    {
        name: "أسيوط - Asyut",
        lat: 27.1820,
        lng: 31.1822
    },
    {
        name: "ديروط - Dayrut",
        lat: 27.1700,
        lng: 31.3112
    },
    {
        name: "ساحل سليم - Sahel Selim",
        lat: 27.1537,
        lng: 31.2657
    },
    {
        name: "صدفا - Sidfa",
        lat: 27.0560,
        lng: 31.1908
    },
    {
        name: "قوصية - Qusiya",
        lat: 27.2213,
        lng: 31.2516
    },
    {
        name: "منفلوط - Manfalut",
        lat: 27.2853,
        lng: 31.2608
    },
    {
        name: "الفشن - Al-Fashn",
        lat: 29.2095,
        lng: 31.0228
    },
    {
        name: "الواسطى - Al-Wasta",
        lat: 29.1872,
        lng: 31.0284
    },
    {
        name: "أهناسيا - Ihnasya",
        lat: 29.1828,
        lng: 31.0707
    },
    {
        name: "ببا - Beba",
        lat: 29.1878,
        lng: 31.0752
    },
    {
        name: "بني سويف - Beni Suef",
        lat: 29.0720,
        lng: 31.0962
    },
    {
        name: "سمسطا - Samasta",
        lat: 29.0492,
        lng: 31.0791
    },
    {
        name: "مدينة ناصر - Nasr City",
        lat: 29.1575,
        lng: 31.0737
    },
    {
        name: "حي الجنوب - Hay Al-Janoub",
        lat: 30.5985,
        lng: 32.2412
    },
    {
        name: "حي الزهور - Hay Al-Zuhour",
        lat: 30.5793,
        lng: 32.2751
    },
    {
        name: "حي الشرق - Hay Al-Sharq",
        lat: 30.6000,
        lng: 32.2562
    },
    {
        name: "حي الضواحي - Hay Al-Dawahi",
        lat: 30.6100,
        lng: 32.2841
    },
    {
        name: "حي العرب - Hay Al-Arab",
        lat: 30.5990,
        lng: 32.2309
    },
    {
        name: "حي المناخ - Hay Al-Manakh",
        lat: 30.5755,
        lng: 32.2815
    },
    {
        name: "حي بورفؤاد - Hay Port Fouad",
        lat: 30.3916,
        lng: 32.3803
    },
    {
        name: "دهب - Dahab",
        lat: 28.5136,
        lng: 34.5085
    },
    {
        name: "رأس سدر - Ras Sudr",
        lat: 29.2391,
        lng: 33.9467
    },
    {
        name: "شرم الشيخ - Sharm El-Sheikh",
        lat: 27.9159,
        lng: 34.3299
    },
    {
        name: "طابا - Taba",
        lat: 29.4853,
        lng: 34.7710
    },
    {
        name: "نخل - Nakhla",
        lat: 29.5069,
        lng: 34.7688
    },
    {
        name: "نويبع - Nuweiba",
        lat: 29.0206,
        lng: 34.9377
    },
    {
        name: "التبين - El-Tebbin",
        lat: 29.9800,
        lng: 31.4670
    },
    {
        name: "المعصرة - Ma'sara",
        lat: 29.8891,
        lng: 31.2276
    },
    {
        name: "حي المستقبل - Hay Al-Mustaqbal",
        lat: 29.9651,
        lng: 31.3080
    },
    {
        name: " مدينة 15 مايو - May 15 City",
        lat: 29.9651,
        lng: 31.3080
    },
    {
        name: "عين حلوان - Ain Helwan",
        lat: 29.8972,
        lng: 31.2491
    },
    {
        name: "ومدينة الصف - City of Al-Saf",
        lat: 29.8694,
        lng: 31.2913
    },
    {
        name: " ومدينة أطفيح -  City of Atfeeh",
        lat: 29.8261,
        lng: 31.1681
    },
    {
        name: "الزرقا - Al-Zarqa",
        lat: 31.2334,
        lng: 31.2272
    },
    {
        name: "دمياط - Damietta",
        lat: 31.8100,
        lng: 31.8350
    },
    {
        name: "فارسكور - Faraskour",
        lat: 31.2950,
        lng: 31.8260
    },
    {
        name: "كفر سعد - Kafr Saad",
        lat: 31.5514,
        lng: 31.9463
    },
    {
        name: "البلينا - Belina",
        lat: 26.4375,
        lng: 31.5867
    },
    {
        name: "المراغة - Maragha",
        lat: 26.4370,
        lng: 31.6360
    },
    {
        name: "المنشاة - Al-Mansha",
        lat: 26.5400,
        lng: 31.6344
    },
    {
        name: "أخميم - Akhmim",
        lat: 26.5496,
        lng: 31.6806
    },
    {
        name: "جرجا - Girga",
        lat: 26.1845,
        lng: 31.6770
    },
    {
        name: "جهينة - Juhayna",
        lat: 26.1573,
        lng: 31.5745
    },
    {
        name: "دار السلام - Dar Al-Salam",
        lat: 26.3106,
        lng: 31.7081
    },
    {
        name: "ساقلتا - Saqalta",
        lat: 26.3934,
        lng: 31.5608
    },
    {
        name: "سوهاج - Suhag",
        lat: 26.5540,
        lng: 31.6942
    },
    {
        name: "طما - Tama",
        lat: 26.5762,
        lng: 31.6528
    },
    {
        name: "طهطا - Taha",
        lat: 26.1800,
        lng: 31.7308
    },
    {
        name: "الحسنة - Al-Hasana",
        lat: 30.3882,
        lng: 31.6377
    },
    {
        name: "الشيخ زويد - Sheikh Zuweid",
        lat: 30.3581,
        lng: 34.2365
    },
    {
        name: "العريش - Al-Arish",
        lat: 30.5863,
        lng: 34.2611
    },
    {
        name: "بئر العبد - Bir Al-Abd",
        lat: 30.3826,
        lng: 34.2904
    },
    {
        name: "رفح - Rafah",
        lat: 31.2076,
        lng: 34.2492
    },
    {
        name: "نخل - Nakhil",
        lat: 30.4332,
        lng: 34.6467
    },
    {
        name: "الأقصر - Luxor",
        lat: 25.6872,
        lng: 32.6395
    },
    {
        name: "الوقف - Al-Waqf",
        lat: 25.7334,
        lng: 32.6404
    },
    {
        name: "أبو تشت - Abu Tisht",
        lat: 26.0744,
        lng: 31.4769
    },
    {
        name: "أرمنت - Armant",
        lat: 25.7025,
        lng: 32.6733
    },
    {
        name: "إسنا - Esna",
        lat: 25.3134,
        lng: 32.5346
    },
    {
        name: "دشنا - Deshna",
        lat: 25.4795,
        lng: 32.6522
    },
    {
        name: "فرشوط - Farshout",
        lat: 25.5742,
        lng: 32.5855
    },
    {
        name: "قفط - Qift",
        lat: 25.7065,
        lng: 32.5918
    },
    {
        name: "قنا - Qena",
        lat: 26.1582,
        lng: 32.6491
    },
    {
        name: "قوص - Qus",
        lat: 26.1923,
        lng: 32.6794
    },
    {
        name: "نجع حمادي - Nagaa Hamadi",
        lat: 26.1435,
        lng: 32.4212
    },
    {
        name: "نقادة - Naqada",
        lat: 26.0320,
        lng: 32.5896
    },
    {
        name: "الحامول - Al-Hamool",
        lat: 31.1368,
        lng: 30.7980
    },
    {
        name: "الرياض - Al-Riyadh",
        lat: 31.1347,
        lng: 30.7832
    },
    {
        name: "بلطيم - Baltim",
        lat: 31.4716,
        lng: 31.1031
    },
    {
        name: "بيلا - Beila",
        lat: 31.0314,
        lng: 30.7068
    },
    {
        name: "دسوق - Desouk",
        lat: 31.0817,
        lng: 30.9281
    },
    {
        name: "سيدي سالم - Sidi Salim",
        lat: 31.1222,
        lng: 30.7836
    },
    {
        name: "فوة - Fowa",
        lat: 31.1733,
        lng: 30.9360
    },
    {
        name: "قلين - Qalyub",
        lat: 31.2696,
        lng: 30.9944
    },
    {
        name: "كفر الشيخ - Kafr Al-Sheikh",
        lat: 31.1012,
        lng: 30.9318
    },
    {
        name: "مطوبس - Matoubas",
        lat: 31.2273,
        lng: 30.7892
    },
    {
        name: "الحمام - Al-Hamam",
        lat: 30.8500,
        lng: 29.6648
    },
    {
        name: "السلوم - Sallum",
        lat: 31.3150,
        lng: 25.8932
    },
    {
        name: "الضبعة - Al-Dabaa",
        lat: 30.5860,
        lng: 28.9825
    },
    {
        name: "العلمين - Alamein",
        lat: 30.5428,
        lng: 28.9984
    },
    {
        name: "النجيلة - Al-Nagila",
        lat: 30.6711,
        lng: 28.8754
    },
    {
        name: "براني - Barani",
        lat: 30.6110,
        lng: 28.8807
    },
    {
        name: "سيوة - Siwa",
        lat: 29.2056,
        lng: 25.5135
    },
    {
        name: "مطروح - Matrouh",
        lat: 31.3545,
        lng: 27.2164
    },
]

const palestineCities = [
    { name: "القدس - Jerusalem", lat: 31.7683, lng: 35.2137 },
    { name: "غزة - Gaza", lat: 31.5, lng: 34.47 },
    { name: "رام الله - Ramallah", lat: 31.9023, lng: 35.2034 },
    { name: "بيت لحم - Bethlehem", lat: 31.7054, lng: 35.2024 },
    { name: "نابلس - Nablus", lat: 32.2211, lng: 35.2625 },
    { name: "الخليل - Hebron", lat: 31.5286, lng: 35.0947 },
    { name: "قلقيلية - Qalqilya", lat: 32.1986, lng: 34.9739 },
    { name: "طولكرم - Tulkarm", lat: 32.3144, lng: 35.0026 },
    { name: "سلفيت - Salfit", lat: 32.1007, lng: 35.1985 },
    { name: "جنين - Jenin", lat: 32.4533, lng: 35.2910 },
    { name: "أريحا - Jericho", lat: 31.8575, lng: 35.4417 },
    { name: "بيت جالا - Beit Jala", lat: 31.7033, lng: 35.2112 },
    { name: "أريحا - Jericho", lat: 31.8575, lng: 35.4417 },
    { name: "المغربية - Al-Maghariba", lat: 31.7777, lng: 35.2061 },
];

const allGovernorates = [
    ...availableSuggestions,
    ...governoratesEgypt,
    ...governoratesSaudi,
    ...famousCitiesWorldwide,
    ...centersEgypt,
    ...palestineCities
];

export default allGovernorates;