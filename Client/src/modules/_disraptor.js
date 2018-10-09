let xfc = [
    {ID: 7, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №3 им. Н.А.Добролюбова, Смоленская пл., д. 13/21`},
    {ID: 11, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №16, Новоспасский пер., д.5`},
    {ID: 14, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №20 им. А.А.Дельвига, ул. Большая почтовая, д. 18/20, корп. 18А, стр. 18, стр. 13`},
    {ID: 15, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №9 им. Н.В.Гоголя, ул. Большая Грузинская, д.39`},
    {ID: 16, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №20 им. А.А.Дельвига, Аптекарский пер., д.8/2, стр.1`},
    {ID: 19, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №19 имени Ф.М.Достоевского, ул. Покровка, д. 21- 23/25, стр.4, стр. 3`},
    {ID: 20, Name: `ГБУК г. Москвы "ЦБС ЦАО",   Библиотека №13 имени Н.Г.Чернышевского, ул. Большая Татарская, д.32`},
    {ID: 21, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №12 им. И.А.Бунина, ул. 1905 года, д.3`},
    {ID: 22, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №20 им. А.А. Дельвига, ул. Госпитальный Вал, д. 5, стр.2`},
    {ID: 24, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №18 им. В.А. Жуковского, Лялин пер., д. 24-26, стр.2`},
    {ID: 25, Name: `ГБУК г. Москвы "ЦБС ЦАО", Центральная детская библиотека №14, ул. Бахрушина, д. 4, стр. 1`},
    {ID: 26, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №16,  ул. Калитниковская Малая, д. 22, стр. 1`},
    {ID: 27, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №16, Волгоградский пр-т, д. 16`},
    {ID: 28, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Центральная детская библиотека №14, ул. Дубининская, д. 20, стр. 1`},
    {ID: 29, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №6 имени В.В.Вересаева, Ружейный пер., д. 4, стр. 1`},
    {ID: 30, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №3 имени Н.А.Добролюбова, Большой Афанасьевский пер., д. 35-37, стр. 4`},
    {ID: 31, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №1 им. Грибоедова, ул. Большая Переяславская, д. 15, стр.1`},
    {ID: 32, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №1 Детский центр им. Х.К.Андерсена, пр-т. Мира, д. 68, стр.1`},
    {ID: 33, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №4 им. В.В.Фурцевой, Фрунзенская наб., д.50`},
    {ID: 34, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №10, Стрельбищенский пер., д. 5, корп. 3`},
    {ID: 35, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №7 им. Антуана де Сент-Экзюпери, Красносельский пер., д.2`},
    {ID: 36, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №13 им. Н.Г.Чернышевского, Космодамианская наб., д. 4/22В`},
    {ID: 37, Name: `ГБУК г. Москвы "ЦБС ЦАО", Центральная библиотека №15 им. В.О.Ключевского, Большой Факельный пер., д. 3, стр.2`},
    {ID: 38, Name: `ГБУК г. Москвы "ЦБС ЦАО", Нотно-музыкальная библиотека №17 им. П.И.Юргерсона, Николоямский пер., д. 3А, корп. 4`},
    {ID: 39, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №5 им. М.А.Волошина, Новодевичий пр., д. 10`},
    {ID: 40, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №12 им. братьев Гримм, Нововаганьковский пер., д.22`},
    {ID: 41, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №267 им. Н.К.Крупской, ул. Русаковская, д.8, стр.3`},
    {ID: 42, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №267 им. Н.К.Крупской,  ул. Большая Спасская, д. 31`},
    {ID: 45, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №8 им. А.П.Чехова, Страстной б-р, д. 6, стр. 2`},
    {ID: 48, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №19 имени Ф.М.Достоевского,  Чистопрудный б-р, д. 23, стр. 1`},
    {ID: 50, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №1 имени А.С. Грибоедова, ул. Сущёвский Вал, д. 66`},
    {ID: 53, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №11 имени Д.В.Давыдова, Шмитовский пер., д. 46, корп. 2`},
    {ID: 54, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №2 имени Ю.В.Трифонова, ул. 4-я Тверская-Ямская, д. 26/8`},
    {ID: 55, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №10, Красногвардейский б-р, д. 1`},
    {ID: 56, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №1 имени А.С. Грибоедова, Банный пер., д. 4, стр. 2`},
    {ID: 65, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №11 имени Д.В.Давыдова, Мукомольный пр., д. 9, корп. 2`},
    {ID: 148, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №8 имени А.П.Чехова, ул. Большая Дмитровка, д. 23/8, стр. 1 - 2`},
    {ID: 158, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №2 имени Ю.В.Трифонова, ул. Лесная, д. 63, стр. 1`},
    {ID: 237, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №19 имени Ф.М.Достоевского, ул. Макаренко, д. 1/19`},
    {ID: 273, Name: `ГБУК г. Москвы "ЦБС ЦАО", Библиотека №3 имени Н.А.Добролюбова, ул. Новый Арбат, д. 30/9`},
    {ID: 279, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Центральная библиотека №15 имени В.О.Ключевского, ул. Новорогожская, д. 5`},
    {ID: 433, Name: `ГБУК г. Москвы "ЦБС ЦАО",  Библиотека №18 имени В.А.Жуковского, Дурасовский пер., д. 9, стр. 1`},
];
let tempd = [
    {ID: 31, Data: [ [700,800,500,400,400,200,100,150,250,400,400,200],[2500,2500,2000,3000,3000,2000,1000,1000,1040,2500,2500,2000],[8000,8000,7500,8000,7500,6000,2000,2000,5000,8000,8000,8000] ] },
    {ID: 50, Data: [ [400,550,550,550,500,200,100,100,200,300,150,150],[3000,1000,1000,2500,1000,1000,200,300,500,2000,1412,1000],[6300,6850,6850,6850,6850,6300,2000,3000,5000,5000,5000,5000] ] },
    {ID: 54, Data: [ [550,300,350,300,250,150,100,100,250,250,200,200],[1300,1300,2294,1150,1100,1050,500,750,1150,1100,1200,1209],[7000,6000,6000,5000,5000,3000,1500,2500,3000,4000,4000,5000] ] },
    {ID: 158, Data: [ [600,300,200,300,200,200,100,150,250,250,250,200],[2000,1750,2800,2050,1300,1140,700,1050,1568,1750,2000,2000],[8000,6000,6000,5000,5000,3000,1500,2500,3000,4000,4000,4000] ] },
    {ID: 56, Data: [ [330,330,330,600,510,400,100,100,300,300,300,150],[1500,1100,2550,1500,1350,1000,500,500,1328,1000,1000,1000],[5300,5300,5300,6900,6870,6830,2000,3250,5000,6650,6000,5600] ] },
    {ID: 45, Data: [ [1000,700,780,700,700,600,500,500,670,710,710,680],[3470,4700,4830,4000,4000,3000,3000,3000,3414,4100,4100,3800],[9770,12720,13000,14500,14000,11540,9000,9000,13740,12000,12000,11730] ] },
    {ID: 32, Data: [ [300,450,450,450,300,150,100,100,300,300,300,200],[1200,1100,1200,1500,1500,1500,400,403,800,1556,1500,1500],[3600,4200,4200,6800,6700,7000,2000,4000,5000,6000,6000,4500] ] },
    {ID: 7, Data: [ [108,260,319,525,580,215,104,128,280,460,412,359],[808,1490,1902,3779,5431,1020,820,1400,5878,3580,3152,2718],[1869,4529,3002,9704,10505,3241,1600,1944,10756,6750,6104,4996] ] },
    {ID: 33, Data: [ [311,211,228,296,312,292,186,162,192,224,286,300],[1715,2316,2894,2195,1924,1652,1243,1385,1527,1892,2262,2078],[5301,5118,5181,4683,4334,3983,2898,3120,3342,4934,4680,4426] ] },
    {ID: 29, Data: [ [372,330,348,225,205,170,120,130,200,300,300,300],[1676,1900,2100,2100,1850,1716,1700,1700,2050,2100,2050,2024],[4420,4440,4950,5000,5000,2700,2700,2700,5000,5030,5030,5030] ] },
    {ID: 39, Data: [ [400,1500,1100,350,100,150,100,100,300,400,400,350],[3000,3000,3800,2000,2000,3000,2000,2000,3000,3000,3000,2973],[10000,10000,10000,4000,3000,3000,3000,3000,4000,10000,10000,10000] ] },
    {ID: 273, Data: [ [1223,680,667,680,620,430,215,213,388,589,610,435],[2325,2248,2777,3600,3450,2820,2160,2381,2750,3070,3290,2980],[5805,7010,7525,13100,12870,10400,8700,9130,10500,11100,10500,10360] ] },
    {ID: 15, Data: [ [795,698,607,622,584,474,180,192,206,337,355,200],[2046,2937,3590,3172,2190,1410,1102,912,1452,3052,3258,2272],[5722,6340,10620,9952,9344,8012,4120,4508,5022,10300,10860,6200] ] },
    {ID: 40, Data: [ [213,360,437,400,300,300,180,300,320,300,320,320],[1660,2300,3000,3300,1800,1422,1000,1500,2000,3200,2300,2800],[3624,6100,5500,5400,5400,5000,4800,5200,5500,6000,6200,6276] ] },
    {ID: 21, Data: [ [371,659,650,600,475,350,300,275,475,395,375,325],[2203,2569,2713,2612,2399,1849,1625,1550,2429,2598,2736,2809],[7044,8262,8432,8492,7937,6300,5866,5863,8081,8077,8169,8477] ] },
    {ID: 34, Data: [ [110,100,150,150,140,100,100,100,150,140,140,120],[590,700,750,710,676,650,650,650,660,680,700,670],[1780,2080,2500,2400,2300,2000,2000,2000,2400,2240,2200,2100] ] },
    {ID: 65, Data: [ [525,300,375,315,225,360,105,75,120,210,150,240],[2550,2010,3465,2105,1503,2407,700,500,805,1400,1005,1607],[9095,5200,6505,5460,3900,6240,1820,1300,2080,3640,2600,4160] ] },
    {ID: 55, Data: [ [750,535,470,435,420,380,350,350,400,420,390,350],[1590,1781,2400,2400,2400,2300,2100,2100,2500,2600,2600,2400],[10270,9890,8840,8000,7500,7500,6000,6000,7000,7000,6500,6500] ] },
    {ID: 53, Data: [ [315,225,360,235,169,271,78,56,91,157,112,181],[1459,1355,2606,1422,1016,1627,474,338,543,950,678,1086],[5460,3900,6240,4075,2930,4695,1350,970,1580,2720,1940,3140] ] },
    {ID: 20, Data: [ [827,733,640,840,633,427,45,85,220,280,266,254],[2192,3233,3075,3200,2925,2150,650,810,1792,2586,2325,2697],[9924,10916,11910,10815,10710,6725,1700,2500,3300,7800,8100,6600] ] },
    {ID: 25, Data: [ [367,350,333,350,350,240,30,50,80,350,300,200],[3418,3300,3600,3000,1800,1210,850,820,2100,1700,2200,1324],[2994,4800,6506,7835,5680,6915,3005,2985,3180,5507,6125,4468] ] },
    {ID: 41, Data: [ [190,160,175,190,175,160,50,40,60,120,120,60],[360,335,278,560,560,528,520,555,670,700,700,728],[2500,2600,2700,2700,2600,2500,1200,1140,1560,2500,2600,1400] ] },
    {ID: 35, Data: [ [720,525,315,283,295,272,210,206,234,246,243,201],[2300,1980,1970,2425,2390,2330,2110,2200,2290,3146,3182,3110],[8376,7010,6114,5796,5300,5204,4830,4250,4920,4390,4480,4330] ] },
    {ID: 42, Data: [ [890,450,360,630,560,210,80,120,200,350,350,300],[1780,1800,1720,2300,1800,1600,1000,1300,1591,2100,2100,2200],[8700,6700,6600,7500,7500,7000,3000,4500,6500,7000,7000,6000] ] },
    {ID: 28, Data: [ [1001,723,616,655,320,85,23,36,176,326,344,195],[3232,3100,3750,4306,2054,1228,856,979,2161,3042,3181,2367],[5776,10348,11766,7835,7025,3350,2128,2582,6790,7255,6175,6970] ] },
    {ID: 36, Data: [ [500,630,670,450,400,50,50,50,190,360,300,100],[1567,2853,3080,2000,1200,800,400,600,1700,1550,1540,1206],[4587,8450,9119,8000,3600,2400,1200,1800,4700,7750,7700,5694] ] },
    {ID: 37, Data: [ [1272,839,839,885,885,880,265,265,270,615,615,620],[0,0,0,0,0,0,0,0,0,0,0,0,],[9920,15140,15140,15135,15135,15130,4935,4935,4930,14200,14200,14200] ] },
    {ID: 11, Data: [ [1780,110,110,400,300,200,80,120,200,450,450,300],[2950,2674,3200,1600,1500,912,450,556,1000,2300,2300,1964],[2500,11000,11500,8000,6000,3000,2500,3000,4500,9500,8500,8000] ] },
    {ID: 38, Data: [ [700,800,500,400,400,200,100,150,250,400,400,200],[2586,2586,2086,3087,3086,2086,1086,1086,1127,2577,2577,2095],[8000,8000,7500,8000,7500,6000,2000,2000,5000,8000,8000,8000] ] },
    {ID: 27, Data: [ [300,284,316,265,290,245,110,132,183,308,320,247],[3549,4700,1667,3812,3300,3210,1327,1400,1610,3426,3700,2998],[7558,7540,7542,3945,3767,3288,2371,2477,3152,3625,3453,3282] ] },
    {ID: 279, Data: [ [337,393,395,376,376,188,168,168,224,337,338,450],[1462,1877,2226,1650,1650,825,742,742,990,1650,1650,2200],[5850,6825,6825,6500,6500,3250,2925,2925,3900,5850,5850,7800] ] },
    {ID: 48, Data: [ [936,1104,748,267,200,95,69,55,115,200,283,428],[6800,5350,5400,2618,1847,1100,659,300,1341,1750,1067,1000],[2550,3953,12021,9550,8870,1580,2500,2500,13000,13452,4000,4024] ] },
    {ID: 14, Data: [ [465,143,142,250,180,20,10,10,80,70,70,60],[495,969,1256,650,600,350,150,150,701,600,600,550],[2335,2332,2333,2850,2800,1350,750,750,3500,2500,2500,2000] ] },
    {ID: 16, Data: [ [481,300,319,220,235,45,20,25,205,130,140,130],[1713,2249,2912,1950,1521,1040,380,420,1701,1428,1330,1409],[4831,3390,3283,4700,4750,1542,950,900,4152,3500,3450,3552] ] },
    {ID: 433, Data: [ [284,250,272,170,115,35,8,26,136,80,72,52],[904,1020,1126,1002,989,359,131,275,1009,1029,1075,993],[3206,3500,3518,3107,2021,659,246,867,2111,2505,2183,2077] ] },
    {ID: 24, Data: [ [433,405,387,250,180,80,60,70,110,100,100,75],[1762,3090,3211,3265,3105,1820,1250,1380,3050,3450,3530,2930],[3095,4200,3655,3900,3730,2320,1480,1650,3935,4035,4130,2870] ] },
    {ID: 22, Data: [ [980,360,329,300,200,100,100,110,200,100,120,101],[2905,3547,3223,793,918,468,410,380,559,810,790,849],[6470,6800,6141,4000,4200,3800,2000,2000,4000,4300,4800,3489] ] },
    {ID: 237, Data: [ [573,356,333,491,251,115,40,85,135,300,443,628],[1600,2150,2900,1790,1632,1800,341,1100,971,1300,3233,3180],[4296,3896,7957,7132,4784,4813,4059,3945,7647,3407,6384,6680] ] },
];


function DistributeEvenlySimpleMass (Year, MegaPack) {//MonthSumRegList, MonthSumVisitList, MonthSumBookList) {
    // reg,visit,give
    // MegaPack[i] = {ID: 1, Data: [ [...],[...],[...] ] },

    let Sql = '';
    for (let i = 0; i < MegaPack.length; i++){
        let Pack = MegaPack[i];

        //console.log('-- ##################################');
        for (let m = 0; m < 12; m++){
            let RegList   = DataInput.DataPlanInput.Calendar.DistributeEvenlySimple(m, Pack.Data[0][m]);
            let VisitList = DataInput.DataPlanInput.Calendar.DistributeEvenlySimple(m, Pack.Data[1][m]);
            let BookList  = DataInput.DataPlanInput.Calendar.DistributeEvenlySimple(m, Pack.Data[2][m]);
            let LibraryID = Pack.ID;

            for (let d = 0; d < RegList.length; d++){
                let Dt = Lure.Date(new Date(Year, m, d+1)).Format('DD.MM.YYYY');
                Sql += `UPDATE LibraryPlan SET PlanVisit=${VisitList[d]}, PlanRegistration=${RegList[d]}, PlanBook =${BookList[d]} WHERE LibraryID = ${LibraryID} AND convert(Date, DateValue) = convert(Date, '${Dt}')`;
                Sql += '\n';
            }
        }


    }
    console.log(Sql);
};

/*
DistributeEvenlySimpleMass(2018, [
 {ID: 440, Data: [ [700,800,500,400,400,200,100,150,250,400,400,200],[2500,2500,2000,3000,3000,2000,1000,1000,1040,2500,2500,2000],[8000,8000,7500,8000,7500,6000,2000,2000,5000,8000,8000,8000] ] },

 ])

*/

let UserSimple = [
    {LibraryID: 31	,Login: '101',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [31	], Permissions: [3, 8], Name: 'Библиотека № 1 имени Грибоедова'},
    {LibraryID: 50	,Login: '102',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [50	], Permissions: [3, 8], Name: 'Библиотека № 1 Отдел чтения для детей и юношества'},
    {LibraryID: 54	,Login: '103',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [54	], Permissions: [3, 8], Name: 'Библиотека №2 имени Ю.В. Трифонова Отдел экономической информации'},
    {LibraryID: 158	,Login: '104',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [158	], Permissions: [3, 8], Name: 'Библиотека № 2 им. Ю.В. Трифонова'},
    {LibraryID: 56	,Login: '105',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [56	], Permissions: [3, 8], Name: 'Библиотека № 1 Культурный центр В.Я Вульфа'},
    {LibraryID: 45	,Login: '106',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [45	], Permissions: [3, 8], Name: 'Библиотека №8 имени А.П. Чехова'},
    {LibraryID: 32	,Login: '107',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [32	], Permissions: [3, 8], Name: 'Библиотека № 1 Детский центр им. Х.К. Андерсена'},
    {LibraryID: 7	,Login: '201',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [7	], Permissions: [3, 8], Name: 'Библиотека № 3 им. Н.А. Добролюбова'},
    {LibraryID: 33	,Login: '204',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [33	], Permissions: [3, 8], Name: 'Библиотека №4 имени Е.А. Фурцевой'},
    {LibraryID: 29	,Login: '205',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [29	], Permissions: [3, 8], Name: 'Библиотека №6 имени В.В. Вересаева'},
    {LibraryID: 39	,Login: '206',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [39	], Permissions: [3, 8], Name: 'Библиотека №5 имени М.А. Волошина'},
    {LibraryID: 273	,Login: '208',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [273	], Permissions: [3, 8], Name: 'Библиотека №3 имени Н.А. Добролюбова Детский отдел'},
    {LibraryID: 15	,Login: '301',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [15	], Permissions: [3, 8], Name: 'Библиотека № 9 им. Н.В. Гоголя'},
    {LibraryID: 40	,Login: '302',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [40	], Permissions: [3, 8], Name: 'Библиотека №12 имени И.А. Бунина Отдел творческих путешествий и открытий по сказкам Братьев Гримм'},
    {LibraryID: 21	,Login: '303',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [21	], Permissions: [3, 8], Name: 'Библиотека № 12 им. И.А. Бунина'},
    {LibraryID: 34	,Login: '304',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [34	], Permissions: [3, 8], Name: 'Библиотека № 10 ООРХ'},
    {LibraryID: 65	,Login: '305',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [65	], Permissions: [3, 8], Name: 'Библиотека № 11 им. Д.В. Давыдова'},
    {LibraryID: 55	,Login: '306',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [55	], Permissions: [3, 8], Name: 'Библиотека №10'},
    {LibraryID: 53	,Login: '307',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [53	], Permissions: [3, 8], Name: 'Библиотека № 11 Центр детского развития'},
    {LibraryID: 20	,Login: '401',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [20	], Permissions: [3, 8], Name: 'Библиотека № 13 им. Н.Г. Чернышевского'},
    {LibraryID: 25	,Login: '402',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [25	], Permissions: [3, 8], Name: 'ЦДБ № 14'},
    {LibraryID: 41	,Login: '403',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [41	], Permissions: [3, 8], Name: 'Библиотека №267 ООРХ'},
    {LibraryID: 35	,Login: '404',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [35	], Permissions: [3, 8], Name: 'Библиотека № 7 им. Антуана де Сент-Экзюпери'},
    {LibraryID: 42	,Login: '405',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [42	], Permissions: [3, 8], Name: 'Библиотека №267 им. Н.К. Крупской'},
    {LibraryID: 28	,Login: '406',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [28	], Permissions: [3, 8], Name: 'ЦДБ № 14 Отдел семейного чтения'},
    {LibraryID: 36	,Login: '407',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [36	], Permissions: [3, 8], Name: 'Библиотека № 13 Детский отдел'},
    {LibraryID: 37	,Login: '501',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [37	], Permissions: [3, 8], Name: 'Центральная библиотека №15 имени В.О. Ключевского'},
    {LibraryID: 11	,Login: '502',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [11	], Permissions: [3, 8], Name: 'Библиотека №16 Отдел "Библиотека префекта ЦАО"'},
    {LibraryID: 26	,Login: '503',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [26	], Permissions: [3, 8], Name: 'Библиотека №16 Отдел по работе с молодежью'},
    {LibraryID: 38	,Login: '504',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [38	], Permissions: [3, 8], Name: 'Нотно-музыкальная библиотека №17 имени П.И. Юргенсона'},
    {LibraryID: 27	,Login: '505',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [27	], Permissions: [3, 8], Name: 'Библиотека №16 Отдел "Культурный центр милосердия и толерантности имени Ф.П. Гааза"'},
    {LibraryID: 279	,Login: '506',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [279	], Permissions: [3, 8], Name: 'Центральная библиотека №15 имени В.О. Ключевского Отдел детского развития'},
    {LibraryID: 48	,Login: '601',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [48	], Permissions: [3, 8], Name: 'Библиотека № 19 им. Ф.М. Достоевского'},
    {LibraryID: 14	,Login: '602',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [14	], Permissions: [3, 8], Name: 'Библиотека № 20 ООРХ'},
    {LibraryID: 16	,Login: '603',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [16	], Permissions: [3, 8], Name: 'Библиотека №20 имени А.А. Дельвига'},
    {LibraryID: 433	,Login: '604',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [433	], Permissions: [3, 8], Name: 'Библиотека № 18 ООРХ'},
    {LibraryID: 24	,Login: '605',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [24	], Permissions: [3, 8], Name: 'Библиотека № 18 им. В.А. Жуковского'},
    {LibraryID: 22	,Login: '606',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [22	], Permissions: [3, 8], Name: 'Библиотека №20 имени А.А. Дельвига Отдел "Культурный центр им.Н.Ф.Погодина"'},
    {LibraryID: 237	,Login: '607',  PositionID: Dictionary.UserPosition.Librarian, Libraries: [237	], Permissions: [3, 8], Name: 'Библиотека №19 имени Ф.М. Достоевского Отдел детских инициатив'},
];




// LibraryID: 31, Login: '101',  Pass: 61fp30
// LibraryID: 50, Login: '102',  Pass: gv4gu7
// LibraryID: 54, Login: '103',  Pass: 53grma
// LibraryID: 158,Login: '104',  Pass: 7p2nac
// LibraryID: 56, Login: '105',  Pass: nipu3u
// LibraryID: 45, Login: '106',  Pass: s4ej6d
// LibraryID: 32, Login: '107',  Pass: jufgfb
// LibraryID: 7,  Login: '201',  Pass: ip1gmv
// LibraryID: 33, Login: '204',  Pass: mnpg3t
// LibraryID: 29, Login: '205',  Pass: 5rmnno
// LibraryID: 39, Login: '206',  Pass: 9r7lpb
// LibraryID: 273,Login: '208',  Pass: k81m8v
// LibraryID: 15, Login: '301',  Pass: b4bv4j
// LibraryID: 40, Login: '302',  Pass: mekhhb
// LibraryID: 21, Login: '303',  Pass: sgamt1
// LibraryID: 34, Login: '304',  Pass: lofj1m
// LibraryID: 65, Login: '305',  Pass: 3gcqsj
// LibraryID: 55, Login: '306',  Pass: kj7pp7
// LibraryID: 53, Login: '307',  Pass: 3ucro5
// LibraryID: 20, Login: '401',  Pass: 51eve6
// LibraryID: 25, Login: '402',  Pass: bktbhu
// LibraryID: 41, Login: '403',  Pass: hipfjq
// LibraryID: 35, Login: '404',  Pass: 8uqvqd
// LibraryID: 42, Login: '405',  Pass: g75lot
// LibraryID: 28, Login: '406',  Pass: 98v4gv
// LibraryID: 36, Login: '407',  Pass: 7eu8mr
// LibraryID: 37, Login: '501',  Pass: gb73tb
// LibraryID: 11, Login: '502',  Pass: mmglqj
// LibraryID: 26, Login: '503',  Pass: lhvbmh
// LibraryID: 38, Login: '504',  Pass: tmllnh
// LibraryID: 27, Login: '505',  Pass: fqg6s6
// LibraryID: 279,Login: '506',  Pass: tddsle
// LibraryID: 48, Login: '601',  Pass: rlinpb
// LibraryID: 14, Login: '602',  Pass: fdnile
// LibraryID: 16, Login: '603',  Pass: 8mndfq
// LibraryID: 433,Login: '604',  Pass: 3j4bmt
// LibraryID: 24, Login: '605',  Pass: ec9o6j
// LibraryID: 22, Login: '606',  Pass: akunqk
// LibraryID: 237,Login: '607',  Pass: 5v2ac2

let UserMasterLis0t = [
    {LibraryID: 31	,Login: 'danilova_tv',  PositionID: Dictionary.UserPosition.Master, Libraries: [31	], Name: 'danilova_tv'},
    {LibraryID: 50	,Login: 'gavrilina_ls',  PositionID: Dictionary.UserPosition.Master, Libraries: [50	], Name: 'gavrilina_ls'},
    {LibraryID: 54	,Login: 'likhachev_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [54	], Name: 'likhachev_ev'},
    {LibraryID: 158	,Login: 'likhachev_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [158	], Name: 'likhachev_ev'},
    {LibraryID: 56	,Login: 'budanova_ie',  PositionID: Dictionary.UserPosition.Master, Libraries: [56	], Name: 'budanova_ie'},
    {LibraryID: 45	,Login: 'pahomova_ea',  PositionID: Dictionary.UserPosition.Master, Libraries: [45	], Name: 'pahomova_ea'},
    {LibraryID: 32	,Login: 'teleleiko_tm',  PositionID: Dictionary.UserPosition.Master, Libraries: [32	], Name: 'teleleiko_tm'},
    {LibraryID: 7	,Login: 'novoselova_tv',  PositionID: Dictionary.UserPosition.Master, Libraries: [7	], Name: 'novoselova_tv'},
    {LibraryID: 33	,Login: 'samohina_on',  PositionID: Dictionary.UserPosition.Master, Libraries: [33	], Name: 'samohina_on'},
    {LibraryID: 29	,Login: 'zhulikova_sn',  PositionID: Dictionary.UserPosition.Master, Libraries: [29	], Name: 'zhulikova_sn'},
    {LibraryID: 39	,Login: 'kupriyanov_sa',  PositionID: Dictionary.UserPosition.Master, Libraries: [39	], Name: 'kupriyanov_sa'},
    {LibraryID: 273	,Login: 'Chudina_EV',  PositionID: Dictionary.UserPosition.Master, Libraries: [273	], Name: 'Chudina_EV'},
    {LibraryID: 15	,Login: 'Talalaeva_OS',  PositionID: Dictionary.UserPosition.Master, Libraries: [15	], Name: 'Talalaeva_OS'},
    {LibraryID: 40	,Login: 'shestun_ng',  PositionID: Dictionary.UserPosition.Master, Libraries: [40	], Name: 'shestun_ng'},
    {LibraryID: 21	,Login: 'nikolskaya_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [21	], Name: 'nikolskaya_ev'},
    {LibraryID: 34	,Login: 'dudin_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [34	], Name: 'dudin_ev'},
    {LibraryID: 65	,Login: 'pankratova_yy',  PositionID: Dictionary.UserPosition.Master, Libraries: [65	], Name: 'pankratova_yy'},
    {LibraryID: 55	,Login: 'dudin_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [55	], Name: 'dudin_ev'},
    {LibraryID: 53	,Login: 'galchina_la',  PositionID: Dictionary.UserPosition.Master, Libraries: [53	], Name: 'galchina_la'},
    {LibraryID: 20	,Login: 'arlanova_em',  PositionID: Dictionary.UserPosition.Master, Libraries: [20	], Name: 'arlanova_em'},
    {LibraryID: 25	,Login: 'erikhman_nd',  PositionID: Dictionary.UserPosition.Master, Libraries: [25	], Name: 'erikhman_nd'},
    {LibraryID: 41	,Login: 'kiseleva_vl',  PositionID: Dictionary.UserPosition.Master, Libraries: [41	], Name: 'kiseleva_vl'},
    {LibraryID: 35	,Login: 'listov_ms',  PositionID: Dictionary.UserPosition.Master, Libraries: [35	], Name: 'listov_ms'},
    {LibraryID: 42	,Login: 'kovaleva_vv',  PositionID: Dictionary.UserPosition.Master, Libraries: [42	], Name: 'kovaleva_vv'},
    {LibraryID: 28	,Login: 'kokosadze_kd',  PositionID: Dictionary.UserPosition.Master, Libraries: [28	], Name: 'kokosadze_kd'},
    {LibraryID: 36	,Login: 'dobrorodnaya_zi',  PositionID: Dictionary.UserPosition.Master, Libraries: [36	], Name: 'dobrorodnaya_zi'},
    {LibraryID: 37	,Login: 'tsarenko_tf',  PositionID: Dictionary.UserPosition.Master, Libraries: [37	], Name: 'tsarenko_tf'},
    {LibraryID: 11	,Login: 'abdulina_oa',  PositionID: Dictionary.UserPosition.Master, Libraries: [11	], Name: 'abdulina_oa'},
    {LibraryID: 26	,Login: 'kulinenkova_lp',  PositionID: Dictionary.UserPosition.Master, Libraries: [26	], Name: 'kulinenkova_lp'},
    {LibraryID: 38	,Login: 'mikhina_ns',  PositionID: Dictionary.UserPosition.Master, Libraries: [38	], Name: 'mikhina_ns'},
    {LibraryID: 27	,Login: 'rogova_ak',  PositionID: Dictionary.UserPosition.Master, Libraries: [27	], Name: 'rogova_ak'},
    {LibraryID: 279	,Login: 'lukina_tf',  PositionID: Dictionary.UserPosition.Master, Libraries: [279	], Name: 'lukina_tf'},
    {LibraryID: 48	,Login: 'lis',  PositionID: Dictionary.UserPosition.Master, Libraries: [48	], Name: 'lis'},
    {LibraryID: 14	,Login: 'naryshkina_in',  PositionID: Dictionary.UserPosition.Master, Libraries: [14	], Name: 'naryshkina_in'},
    {LibraryID: 16	,Login: 'vanjushenkova_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [16	], Name: 'vanjushenkova_ev'},
    {LibraryID: 433	,Login: 'kurakina_na',  PositionID: Dictionary.UserPosition.Master, Libraries: [433	], Name: 'kurakina_na'},
    {LibraryID: 24	,Login: 'motorygina_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [24	], Name: 'motorygina_ev'},
    {LibraryID: 22	,Login: 'shipilova_iz',  PositionID: Dictionary.UserPosition.Master, Libraries: [22	], Name: 'shipilova_iz'},
    {LibraryID: 237	,Login: 'nikiforova_ey',  PositionID: Dictionary.UserPosition.Master, Libraries: [237	], Name: 'nikiforova_ey'},
];
let UserMasterList = [
    {LibraryID: 31	,Login: 'danilova_tv',  PositionID: Dictionary.UserPosition.Master, Libraries: [31	], Name: 'Данилова Т.В.'},
    {LibraryID: 50	,Login: 'gavrilina_ls',  PositionID: Dictionary.UserPosition.Master, Libraries: [50	], Name: 'Гаврилина Л.С.'},
    {LibraryID: 54	,Login: 'likhachev_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [54, 158	], Name: 'Лихачев Е.В.'},
    {LibraryID: 56	,Login: 'budanova_ie',  PositionID: Dictionary.UserPosition.Master, Libraries: [56	], Name: 'Буданова И. Е.'},
    {LibraryID: 45	,Login: 'pahomova_ea',  PositionID: Dictionary.UserPosition.Master, Libraries: [45	], Name: 'Пахомова Е.А.'},
    {LibraryID: 32	,Login: 'teleleiko_tm',  PositionID: Dictionary.UserPosition.Master, Libraries: [32	], Name: 'Телелейко Т. М.'},
    {LibraryID: 7	,Login: 'novoselova_tv',  PositionID: Dictionary.UserPosition.Master, Libraries: [7	], Name: 'Новоселова Т.В.'},
    {LibraryID: 33	,Login: 'samohina_on',  PositionID: Dictionary.UserPosition.Master, Libraries: [33	], Name: 'Самохина О.Н.'},
    {LibraryID: 29	,Login: 'zhulikova_sn',  PositionID: Dictionary.UserPosition.Master, Libraries: [29	], Name: 'Жуликова С.Н.'},
    {LibraryID: 39	,Login: 'kupriyanov_sa',  PositionID: Dictionary.UserPosition.Master, Libraries: [39	], Name: 'Куприянов С.А.'},
    {LibraryID: 273	,Login: 'Chudina_EV',  PositionID: Dictionary.UserPosition.Master, Libraries: [273	], Name: 'Чудина Е.В.'},
    {LibraryID: 15	,Login: 'Talalaeva_OS',  PositionID: Dictionary.UserPosition.Master, Libraries: [15	], Name: 'Талалаева О.С.'},
    {LibraryID: 40	,Login: 'shestun_ng',  PositionID: Dictionary.UserPosition.Master, Libraries: [40	], Name: 'Шестон Н.Г.'},
    {LibraryID: 21	,Login: 'nikolskaya_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [21	], Name: 'Никольская Е.В.'},
    {LibraryID: 34	,Login: 'dudin_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [34, 55], Name: 'Дудин Е.В.'},
    {LibraryID: 65	,Login: 'pankratova_yy',  PositionID: Dictionary.UserPosition.Master, Libraries: [65	], Name: 'Панкратова Ю.Ю.'},
    {LibraryID: 53	,Login: 'galchina_la',  PositionID: Dictionary.UserPosition.Master, Libraries: [53	], Name: 'Дудин Е.В.'},
    {LibraryID: 20	,Login: 'arlanova_em',  PositionID: Dictionary.UserPosition.Master, Libraries: [20	], Name: 'Галчина Л.А.'},
    {LibraryID: 25	,Login: 'erikhman_nd',  PositionID: Dictionary.UserPosition.Master, Libraries: [25	], Name: 'Арланова Е.М.'},
    {LibraryID: 41	,Login: 'kiseleva_vl',  PositionID: Dictionary.UserPosition.Master, Libraries: [41	], Name: 'Эрихман Н. Д.'},
    {LibraryID: 35	,Login: 'listov_ms',  PositionID: Dictionary.UserPosition.Master, Libraries: [35	], Name: 'Киселева В. Л.'},
    {LibraryID: 42	,Login: 'kovaleva_vv',  PositionID: Dictionary.UserPosition.Master, Libraries: [42	], Name: 'Листов М.С.'},
    {LibraryID: 28	,Login: 'kokosadze_kd',  PositionID: Dictionary.UserPosition.Master, Libraries: [28	], Name: 'Ковалева В.В.'},
    {LibraryID: 36	,Login: 'dobrorodnaya_zi',  PositionID: Dictionary.UserPosition.Master, Libraries: [36	], Name: 'Кокосадзе К.Д.'},
    {LibraryID: 37	,Login: 'tsarenko_tf',  PositionID: Dictionary.UserPosition.Master, Libraries: [37	], Name: 'Добровочная З.И.'},
    {LibraryID: 11	,Login: 'abdulina_oa',  PositionID: Dictionary.UserPosition.Master, Libraries: [11	], Name: 'Царенко Т.Ф.'},
    {LibraryID: 26	,Login: 'kulinenkova_lp',  PositionID: Dictionary.UserPosition.Master, Libraries: [26	], Name: 'Абдулина О.А.'},
    {LibraryID: 38	,Login: 'mikhina_ns',  PositionID: Dictionary.UserPosition.Master, Libraries: [38	], Name: 'Кулинькова Л.П.'},
    {LibraryID: 27	,Login: 'rogova_ak',  PositionID: Dictionary.UserPosition.Master, Libraries: [27	], Name: 'Михина Н. С.'},
    {LibraryID: 279	,Login: 'lukina_tf',  PositionID: Dictionary.UserPosition.Master, Libraries: [279	], Name: 'Рогова А. К.'},
    {LibraryID: 48	,Login: 'lis',  PositionID: Dictionary.UserPosition.Master, Libraries: [48	], Name: 'Лукина Т.Ф.'},
    {LibraryID: 14	,Login: 'naryshkina_in',  PositionID: Dictionary.UserPosition.Master, Libraries: [14	], Name: 'Lis'},
    {LibraryID: 16	,Login: 'vanjushenkova_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [16	], Name: 'Нарышкина И.Н.'},
    {LibraryID: 433	,Login: 'kurakina_na',  PositionID: Dictionary.UserPosition.Master, Libraries: [433	], Name: 'Ванюшенкова Е.В.'},
    {LibraryID: 24	,Login: 'motorygina_ev',  PositionID: Dictionary.UserPosition.Master, Libraries: [24	], Name: 'Куракина Н.А.'},
    {LibraryID: 22	,Login: 'shipilova_iz',  PositionID: Dictionary.UserPosition.Master, Libraries: [22	], Name: 'Моторыгина Е.В.'},
    {LibraryID: 237	,Login: 'nikiforova_ey',  PositionID: Dictionary.UserPosition.Master, Libraries: [237	], Name: 'Шипилова И. З.'},
];
//LibraryID: 31, Login: 'danilova_tv',  Pass: qpm6va
// app.js:30769 LibraryID: 50, Login: 'gavrilina_ls',  Pass: 31pk85
// app.js:30769 LibraryID: 54, Login: 'likhachev_ev',  Pass: kup6pj
// app.js:30769 LibraryID: 158, Login: 'likhachev_ev',  Pass: kup6pj
// app.js:30769 LibraryID: 56, Login: 'budanova_ie',  Pass: 7gotcp
// app.js:30769 LibraryID: 45, Login: 'pahomova_ea',  Pass: g4k560
// app.js:30769 LibraryID: 32, Login: 'teleleiko_tm',  Pass: i9gc8l
// app.js:30769 LibraryID: 7, Login: 'novoselova_tv',  Pass: e6e76a
// app.js:30769 LibraryID: 33, Login: 'samohina_on',  Pass: p2ekbk
// app.js:30769 LibraryID: 29, Login: 'zhulikova_sn',  Pass: 5l7rhg
// app.js:30769 LibraryID: 39, Login: 'kupriyanov_sa',  Pass: jh764p
// app.js:30769 LibraryID: 273, Login: 'Chudina_EV',  Pass: qlc58s
// app.js:30769 LibraryID: 15, Login: 'Talalaeva_OS',  Pass: h9q30q
// app.js:30769 LibraryID: 40, Login: 'shestun_ng',  Pass: kh9jf7
// app.js:30769 LibraryID: 21, Login: 'nikolskaya_ev',  Pass: 7erk7s
// app.js:30769 LibraryID: 34, Login: 'dudin_ev',  Pass: 9di9cp
// app.js:30769 LibraryID: 65, Login: 'pankratova_yy',  Pass: ap1ec4
// app.js:30769 LibraryID: 55, Login: 'dudin_ev',  Pass: 9di9cp
// app.js:30769 LibraryID: 53, Login: 'galchina_la',  Pass: 6o3k6d
// app.js:30769 LibraryID: 20, Login: 'arlanova_em',  Pass: 3372jo
// app.js:30769 LibraryID: 25, Login: 'erikhman_nd',  Pass: dqkf80
// app.js:30769 LibraryID: 41, Login: 'kiseleva_vl',  Pass: di4lgd
// app.js:30769 LibraryID: 35, Login: 'listov_ms',  Pass: q63rf3
// app.js:30769 LibraryID: 42, Login: 'kovaleva_vv',  Pass: 41k22t
// app.js:30769 LibraryID: 28, Login: 'kokosadze_kd',  Pass: 8t5t47
// app.js:30769 LibraryID: 36, Login: 'dobrorodnaya_zi',  Pass: ej2m6r
// app.js:30769 LibraryID: 37, Login: 'tsarenko_tf',  Pass: p37jut
// app.js:30769 LibraryID: 11, Login: 'abdulina_oa',  Pass: dmnqik
// app.js:30769 LibraryID: 26, Login: 'kulinenkova_lp',  Pass: tieifk
// app.js:30769 LibraryID: 38, Login: 'mikhina_ns',  Pass: qgqvnv
// app.js:30769 LibraryID: 27, Login: 'rogova_ak',  Pass: 8erden
// app.js:30769 LibraryID: 279, Login: 'lukina_tf',  Pass: t1qmbs
// app.js:30769 LibraryID: 48, Login: 'lis',  Pass: dfojij
// app.js:30769 LibraryID: 14, Login: 'naryshkina_in',  Pass: ko3j6v
// app.js:30769 LibraryID: 16, Login: 'vanjushenkova_ev',  Pass: 863ucu
// app.js:30769 LibraryID: 433, Login: 'kurakina_na',  Pass: lvk0jk
// app.js:30769 LibraryID: 24, Login: 'motorygina_ev',  Pass: s3212f
// app.js:30769 LibraryID: 22, Login: 'shipilova_iz',  Pass: jmkgdh
// app.js:30769 LibraryID: 237, Login: 'nikiforova_ey',  Pass: ad29p8


function GenLoginsSimple() {
    for (let i=0; i<UserSimple.length;i++){
        let u = UserSimple[i];
        u.Pass = Lure.GetRandom(999999999, 100000000).toString(32);
        let Permissions = [
            Dictionary.Role.DairyInput,
            Dictionary.Role.Helpdesk
        ];
        api.Account_Add(u.Login, u.Pass, u.Name, u.PositionID, u.Libraries, Permissions);
        console.log(`LibraryID: ${u.LibraryID}, Login: '${u.Login}',  Pass: ${u.Pass}`);
    }
}
function GenLoginsMaster() {
    for (let i=0; i<UserMasterList.length;i++){
        let u = UserMasterList[i];
        u.Pass = Lure.GetRandom(999999999, 100000000).toString(32);
        let Permissions = [
            Dictionary.Role.DairySummary,
            Dictionary.Role.DairySummaryEdit,
            Dictionary.Role.Dashboard,
            Dictionary.Role.SetupPlan,
            Dictionary.Role.SetupEvent,
            Dictionary.Role.Helpdesk,
            Dictionary.Role.Meter,
            Dictionary.Role.Passport,
        ];
        api.Account_Add(u.Login, u.Pass, u.Name, u.PositionID, u.Libraries, Permissions);
        console.log(`Pass: ${u.Pass}  | LibraryID: ${u.LibraryID} |  Login: '${u.Login}',  `);
    }
}

function GenSQLRename() {
    for (let i = 0; i < UserMasterList.length; i++){
        console.log(`update auth_LoginExtend SET Name = '${UserMasterList[i].Name}' where LoginID = (select top 1 ID from auth_Login where Login = '${UserMasterList[i].Login}')`)
    }

}
