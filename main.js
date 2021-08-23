
// // add element, Mustafo
var arr = [];

while (true) {
    var request = prompt("Foydalanuvchi Ismi : masalan ::  add element, Mustafo ");
    var all = request.split(' ');

    if (all[0] == 'add'||all[0]== 'Add'||all[0]== 'ADD'){
        arr.push(all[2]);
    } else if (all[0] == 'del' || all[0]=='Del'|| all[0]=='DEL') {
        if (arr.findIndex((el) => el == all[2]) != -1) {
            arr.splice(arr.findIndex((el) => el == all[2]), 1);
        }

    } else if (all[0] == 'stop' || all[0] == 'STOP' || all[0] == 'Stop') {
        break;
    }
    console.log(arr);
}

console.log(arr);



console.log(' ');

function vowels(str) {
    const vowel = ['a', 'y', 'i', 'e', 'o', 'u'];
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i].toLowerCase() == vowel[j]) {
                res++;
            }

        }
    }
    return res;
}

