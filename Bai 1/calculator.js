let a = document.getElementById("numA");
let b = document.getElementById("numB");
let result = document.getElementById("result");
let btnSum = document.getElementById("sum");
let arr = [];
let sumResult = 0;
let check = 0;

btnSum.addEventListener("click", e => {
    if (check > 0) {
        clear();
        solve();
    } else {
        solve();
        check++;
    }
})
function solve() {
    if (parseInt(a.value) > parseInt(b.value)) {
        alert("Vui lòng nhập a < b");
    }
    for (let i = parseInt(a.value); i <= b.value; i++) {
        if (i == 1) {
            continue;
        } else {
            let count = 0;
            console.log(i);
            for (let j = 1; j <= b.value; j++) {
                console.log("i", i);
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                arr.push(i);
            }
        }
        console.log("arr:", arr);
    }
    print(arr);
}
function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            document.getElementById("resultValue").innerHTML += arr[i] + "," + " ";
        } else {
            document.getElementById("resultValue").innerHTML += arr[i]
        }
        sumResult += arr[i]
    }
    document.getElementById("sumResult").innerHTML = sumResult;
}

function clear() {
    document.getElementById("resultValue").innerHTML = "";
    document.getElementById("sumResult").innerHTML = "";
    arr = [];
}