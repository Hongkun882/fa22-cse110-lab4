let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

for (const st in statistics){
    if (st[0] == 'r' || statistics[st] % 2 != 0){
        console.log(st);
    }

}