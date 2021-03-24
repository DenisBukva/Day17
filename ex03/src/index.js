const MY_CAR = {
    wheels:4,
    cylinders:4,
    size:2.2
};
function main(myCar) {
    const {cylinders: carCylindres, size: carSize } = MY_CAR;
    return {carCylindres, carSize};
}
console.log(main(MY_CAR));
module.exports = main;