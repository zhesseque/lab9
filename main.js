function DollarToTenge(a) {
    console.log(a * 473.14, a  + " dollars are converted to Tenge");
}

DollarToTenge(500);

function ThreeNum(z, x, y) {
    if (z < x && x < y || x < z && z < y) {
        console.log(y, "is the greatest among these three numbers");
    } else if (x < y && y < z || y < x && x < z  ) {
        console.log(z ,"is the greatest among these three numbers");
    } else {
        console.log(x, "is the greatest among these three numbers");
    }
}   

ThreeNum(413, 607, 137);

function OddOrEven(q) {
    if (q % 2 == 0) {
        console.log(q, "is an even number");
    }
    else {
        console.log(q, "is an odd number");
    }
}

OddOrEven(9);
