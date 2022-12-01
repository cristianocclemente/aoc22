const totalCaloriesCarriedByTop3ElvesCarryingTheMostCalories = listCaloriesEachElfIsCarryingAsString => {
    const listCaloriesEachElfIsCarrying = listCaloriesEachElfIsCarryingAsString.split('\n')

    let listTotalCalories = []

    let currentElfTotalCalories = 0
    for(line of listCaloriesEachElfIsCarrying) {
        if (line === '') {
            listTotalCalories = [...listTotalCalories, currentElfTotalCalories]
            currentElfTotalCalories = 0
        }
        else currentElfTotalCalories += parseInt(line)
    }
    listTotalCalories = [...listTotalCalories, currentElfTotalCalories]

    listTotalCalories.sort((a,b) => a-b).reverse()
    const caloriesCarriedByTop3ElvesCarryingTheMostCalories = listTotalCalories.slice(0,3)
    return caloriesCarriedByTop3ElvesCarryingTheMostCalories.reduce((partialSum, element) => partialSum + element, 0)
}

console.log(totalCaloriesCarriedByTop3ElvesCarryingTheMostCalories(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`))

console.log(totalCaloriesCarriedByTop3ElvesCarryingTheMostCalories(`7532
37124

37309

7616
2128
2657
8061
8565
7990
5085
6046
7685
5581

35538
10913

5484
5560
4789
1528
4776
5603
5842
6741
4814
4680
5315
6220
1651

10606
12380
13536
12687
1792
5937

19015

6641
7261
4325
6710
3169
2493
4848
4598
1364
1454
7313
2400

34490
7705

1272
7257
10984
6260
3371
4351
4281

20309
12056
12129

4107
8760
3556
1655
9898
10628
10489

4536
2561
6731
6282
1328
3214
5641
3622
4558
1279
3208
1971
5176

69208

3874
3999
3763
1163
3569
1590
1522
3182
2086
2795
4653
4148
1282
1711
3177

8860
8055
9105
8202
8933
5935
7340
7246
1208

1479
1463
1843
2491
4967
2428
3290
5149
1017
1412
5600
6151

2339
3183
8771
8083
6953
8936
4905
1802
9047

3022
6425
7815
4371
8112
5097
7095
7135
7838
6732

10476
1070
6285
5260
7887
9022
2862
8104

1188
4498
4386
6149
4020
1146
3220
1425
6260
4787
1669
2760
2439
2441

27077
12922

4888
9407
8502
12938

5513
5000
8527
1709
3179
7768
2710
4945
5894
3550

9677
8756
7559
4754
5205
6539
7911
9496
4224

6352
3512
18153
6677

28565
30930

5612
2360
1158
5731
1294
1888
1190
3065
5790
2196
4298
5500
5843
5012

5512
6409
3269
5801
6129
5291
2021
3248
2344
4432
4121
2307
2747
2843

3604
3134
1252
3573
5764
2469
2695
6497
5212
5049
1084
4377
3237
5993

3154
4288
3796
9977
4410
8884
8933
8522

2193
4913
5385
1048
9500
2847
8496
6231
6608

18634
34483

5591
5905
8104
2535
6640
6800
8789
3987

33091
2073

11183
7368
10389
10237
10311
4237
7645

56735

1830
6837
4611
7551
2594
4509
1319
6594
2137
5418

2330
16487
5739

11036
9622
4079
12205
6472
1287

4696
8307
9994
2893
9278
9071
2245
9488

13330
15103
14196
14231
12935

7159
6449
7970
1285
5771
8888

23459
4662
18740

5226
5583
1074
1308
4338
2088
7079
4445
6961
2776

4299
3331
10297
7064
1167
7422
8485
8881

13286
1140
13942
4027
12611
11893

23229
13510
21506

2951
19608
17535
7585

3433
3347
9198
6905
5133
1949
1973
5723

63563

17275
18099
16629

16541
10203
3931

7364
1137
8986
10355
2511
2948

7506
20727
24095

7432
1644
1871
7752
4335
6831
1384
4639
4960
1313
2254

1203
1372
1024
2643
2046
5794
1231
1368
5244
3340
4419
1512
1370
1376
2275

26911
4640

4675
4326
4692
1674
6591
2022
3251
1850
6098
3965
1353
1955
4536

6477
16341
10588
13879
6208

7600
5966
5271
7366
3392
1836
8080
1765

9603
3693
11679
2358
4905
8680
11600

8627
3036
3364
3183
5424
2626
6601
8982

4235
5877
6915
2714
5801
1478
7504
7153
6243
3828
4566

4401
5225
2122
3999
1689
5686
4052
1933
2468
2098
3227
1380
2352
4643
5689

8252
2254
10166
3149
6009
3693
7066

1808
4426
4309
4038
2077
3802
3958
2579
7193
6976
3168
1242

2211
5164
3057
8518
9262
8006
7222
7560
9351

2787
5165
2723
2590
2279
2512
6910
6235
1098
3877
6063
5680
2593

5216
5834
7221
4321
2572
1610
3287
2654
5503
3004

4654
2685
5150
1347
6628
5927
3197
6710
3580
2266
6953

4099
6167
7557
3018
7595
7226
4491
1165
4955
2646

4845
6046
3015
2704
4073
4677
4382
5140
2605
5008
2039
2195
2315
6160

7732
2652
6716
6778
5355
3517
3253
2483
2397
2339

14567
26537

15071
13791
6210
2596
16433

9436
9619
10206
15077
4284

16802

5799
2449
1610
3359
3065
4106
5402
2087
2646
5287
3865
4806
2804
5903

4225
2789
5317
8129
1870
3167
7589
6014
5471
5358

17937
12712
14512
15975

10230
9893
3774
5988
7629
3325
9700

9643
1679
1198
6905
1342
8576
2535
3402
8759

8587
6830
3730
1273
2472
3862
1510
9198
2880

4086
3204
2823
6821
1972
3096
5667
4537
1726
6163
2170

6235
4612
5081
2216
4826
1552
1778
6775
3617
2502
5730
3001

7977
2137
2052
4386
2421
3653
5759
1967
5254
4543
2917

9819
10150
4980
11896
9515
10268
1237

11784
6863

5084
1057
7731
4765
3627
4455
4080
8133
5948
8556

6024
1712
13063
5457
2935

6638
6447
6847
4401
4175
2865
1969
1620
3936
4192
2960
6530
2397

3155
3720
5997
8482
2943
3146
4627
4676
2552

5522
11050
12132
6076
10832

2524
6699
1699
7216
3254
5078
3585
5458
4314
4249
2625
3738

22041
24257
5415

7569
3379
2539
4606
8199
2931
6866
2564
5157
8539

11149
12986
10724
5027
3552
3174

2243
6999
2432
3488
1395
2982
5684
6996
2396
8158

1072
4654
7971
7053
1236
4918
1214
7113

8607
8867
7173
5905
5575
4983
5112
2386
4267

4618
5584
8719
1477
7500
7984
9513
2634
1192

2494
15697
5171
6837
2924

9513
3033
5248
5587
1634
7051

5956
6015
3431
5788
5336
4661
8523
8138
4305
7886

3682
6581
2643
1587
2793
1896
3222
3106
4283
6491
3190
4975
2143

4174
1393
4981
1043
4121
5399
1917
3577
2393
6677
2056

15630
30955

6005
5458
2530
7634
1933
1516
4107
2447
8072
4716
7585

8948
2792
6180
13185
12938
8639

5711
6137
3391
2663
1675
1403
3773
6064
5605
6324
4884
3414
4588
3468

8098
3901
5003
6159
8215
2644
8697
8129
6677
6379

10182
6413
2195
8603
7898
8345

5784
3445

6450
6936
4391
4353
2696
8146
1249
5241
1737
2422

4670
9375
11954
1964
7571
7295

24070

3975
5260
1437
1190
6266
6189
6263
2375
3024
1644
3698
6433
3170
4276

5405
4152
3894
2981
6032
1476
1941
1380
5245
5358
4679
1647
4542

30210

2692
1539
7106
2985
3785
5062
4254
2753
6581
3554
5689
6604

6425
9063
1507
4786
3292
4359
3889

7618
9012
5743
6227
7623
5309
10757
8392

21789

7261
5985
2446
3157
7801
6782
1877
7617
2659

15117
19374
8086
17408

2657
9061
11474
13319

7310
2146
1701
9545
12134
12729

1399
1500
6115
7008
1347
7117
8022
2256
4302

6773
8471
7578
1210
3293
7812
8322
1711
8571
6050

4248
2025
1508
15061

8579
6526
7340
6186
3123
7566
6368
4864
8483
3482

5592
3599
3625
1954
1176
5106
2449
6244
5677
4243
4042
5475
5182
3298

1934
2357
6372
2228
1867
4266
3835
6204
2668
5168
3569
1487
3974

30409

3442
6346
6325
6068
4230
5817
6380
5774
4431
4373
2980
1363
1819

16210
7923
16011

1616
2028
6471
5749
4116
3674
5704
5131
6803
4538
4877
6143
1550

17610
29063

4113
7079
6204
3246
1459
7351
6742
6010
4511
3493
7980

37989

2840
8936
6682
4071
6626
8632
5502
6890

12064
2180
4785
13951
9188
5515

52908

1015
1131
5144
3645
3102
3914
2412
1558
1318
2690
4149
3690
3842
3329
2806

3301
6430
7858
14647
11211

47129

1612
4034
3781
4073
2064
1116
7667
1105
2561
2042

8197
12211
3100
10497
7851

12947
15324
9175
18114

10887
1634
10597
9025

7917
18047
19170
1471

2963
3934
1955
3029
5475
6831
3828
1357
4587
1963
2166
4248
1686

4289
9250
1608
8813
5653
4762
7180
1519
7943

9589
2872
4064
7974
7273
4287
6215
5061
9261

4032
2756
1537
3861
1198
2713
5710
2347
5780
1039
1553
2931
3620
1320
5011

15139

12003
13507
4543
6322
13156
7324

14855
17171
7690
12055

6865
2195
1200
4515
10106
9730
1398

6151
1591
6467
3250
5880
1141
5960
5482
1496
3787
4053
5390
4301
2932

5517
7303
1775
1561
5867
6429
7137
5649
6984
6986
6721

10086
3818
12847
13927
2653
9214

5827
4263
1165
5748
3997
2679
6178
2780
6072
5012
4775
2557

11767
5090
15723
11814
2606

16889
7652
16241
14519

65240

5486
2801
6348
1062
1348
5902
5471
1750
2600
4500
2795
3695
4436

8236
10657

13763
7213
13680
1153
2470

2806
6554
3194
4592
5103
2922
5909
5532
3924
2652
5372
3828
5984

9456
10584
7853
11406
3797
6138

7262
5036
4142
10565
9528
9467
3577

6347
7457
5027
3249
1236
8740
2615
8530
7039
2846

47429

6116
7386
5410
4439
2933
6506
5582
4694
4845
3311
6288
3076

16532
9459
24008

1844
3183
4637
7991
5862
6200
7100
2230
4543
5314
1539

7966
2645
6679
6005
7257
5602
4040
4640
5186
2331
1618

8000
3619
7143
2207
2938
2877
1116
6825

4206
18068
3078
3858

4384
6602
7272
7540
3257
2638
3451
6097
6287
2674
7480

4407
1293
1440
7896
3534
1039
3482
7178
6098

9594
5546
12765
5301
12026

8467
8714
7483
6031
4830
9120
6569
1735
4263

11631
6578
6492
1260
2999
7475

10658
22143
23067

5569
1286
3309
4135
5292
2709
2856
4323
5007
2482
2155
1014
3517
4418

3440
5004
4480
1004
5620
5816
2556
3131
4144
7192
3963
6751

10896
4800
8120
11533
7585
2691

4558
6403
4788
3560
5186
5628
1800
1244
3489
7994
7823

9999
10471
9319
11459
9584
2438
10128

9497
2158
13939
5900
10272

4412
4154
10500
5171
3604
7250
10545
9144

9667
5369
8896
4230
3468
7888
1957
8195

12580
10127
9650
7866
7547

1117
3232
6429
4000
2951
7438
4488
4097
6334
6704
3323

3139
2600
4816
5547
2827
1756
2411
4066
5496
1357
6108
4260
5929
3670

1812
4520
1451
1331
3818
5516
7930
3251
4848

6886
9675
4064
11383
9985
3860
10178

1116
6193
2508
7278
7124
3112
2388
3870
4774
5925
8053

7682
7112
1972
6728
3310
6136
3536
8233
1259

2848
5534
3204
3845
3264
1703
3277
1143
4270
5550
2442
1879
4709
4493
2366

6228
7669
2044
3003
5139
9253
7610
4874

8511
4322
4789
10303
10603
8448
5463
1787

56617

5812
2645
4684
5012
4488
4718
3618
3647
4308
1298
3636
2126
2150
5948
2651

4385
4575
11777
8144
9742
3155

12052
9789
11903
10429
12711
1981

5067
3045
1485
2348
1300
3967
5630
6109
3655
3637
2731
2310
2994
2112

13541
2919
11071
3006
3884
10127

5204
5270
9401
8879
2053
5823
5312
3431
7876

2862
5874
22726

5889
11789
12955
7251
12488

3618
7610
4131
3649
7344
6419
5322
6115
8178

1275
2027
6069
4348
5019
3323
3347
4251
1960
4846
1250
3436
4890
5747

12722
13474
10290
5161
10881

1551
7910
7704
2518
4530
6115
6298
4496
7547

5023
15387
7376

18664
16611
6014
18073

3499
5126
6164
5273
5165
3207
4086
2558
5009
4164
2246
4239
1119
4969

6251
4831
5971
7427
1209
3693
2254
3729
7971
3517

7668
4683
3279
3889
5135
5685
4594
2512
6364
7942
2272

7419
3656
6296
1096
7711
6545
3897
9064
7313

1167
2775
6012
6963
2938
5336
6902
3944
3229
4585

14979
6422
17343

3979
4017
9701
6190
10598
4553

14879
13993
5390
19564

9615

5794
6344
4917
1898
4955
8136
1255
5927
8374
4019

12374
5122
13943
9004
10734

12041
8392
5477
7550
11244
3456

4455
7511
7535
5244
7934
8652
8702
9066
5446

8498
8019
9231
12952
10089

11690
2002
4227
9736
9352
6342
8947

1027
6141
5966
5490
5388
5387
3129
5435
4001
4495
1776
5207
2379
4753

5379
4373
2791
5140
5662
12419

1580
5668
4459
5116
4442
4320
2237
3697
4148
5670
2377
1166
5675
1779
4154

6966
22921
15298

28730
9665

6316
7496
6333
7480
6962
2592
2448
1523
5408
3230

5365
1934
5254
2863
11000
4461
6382

9169
19616
3106
1877

18824
7496
6276
1039

5046
5941
5433
3735
7902
2634
6534
3013
2014
3237
1834

1682
4660

3648
1617
1071
4319
5721
5678
4026
2703
5293
5518
6019
4583
6364

10871
17953
13488
12169

11294
15370
13110
15380
14280

2845
4343
11231
8074
5935
4847

1194
8967
2362
9753
7932
10069
7602
9890

9269
4259
1149
5575
6526
6389
8891
4485
6135

3860
1535
5847
5118
3508
5369
5570
2995
6527
2760
5090
2639
6529

23332

2696
4035
5011
3223
3066
2294
2496
4295
5142
5589
6049
1022
1972
2062
1676

1784
3198
3801
1953
1933
1607
3883
3410
3400
1544
2352
3216
5153
4189
2512

2475
2174
4663
4653
2919
5152
5824
6939
2362
2132
1441

6022
5029
4307
12353
15249

12804
26867

4506
6047
4458
4542
3035
3405
5456
5016
3272
2632
4680
5447
4692

5449
17318
18295
14743

8816
19749
18430
8992

33363
10313

9225
6525
3582
5749
8521
3560
4041
1438
5524`))