/////1-я задача///////////////////////// 
function onlyVowels(str) {

    var result = "";
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result = result + str[i]
        }
    }
    return result;
}

const string = 'Привет! Как твои дела?'
var vowels = onlyVowels(string);
console.log(vowels);


/////2-я задача////////////////////////////
function workersOver1000(workers) {

    var filteredWorkers = []

    for (var i = 0; i < workers.length; i++){

        if (workers[i].salary > 1000){

            filteredWorkers.push(workers[i].name)
        }
    }

    return filteredWorkers
}


var result = workersOver1000([
    {
        name: 'Сергей',
        salary: '500'
    },
    {
        name: 'Дмитрий',
        salary: '1200'
    },
    {
        name: 'Андрей',
        salary: '1500'
    }]);

console.log(result)


/////2-я задача - 2-й вариант////////////////////////////
function getWorthyWorkers(workers){
    var WorthyWorkers = [];
    for (var i=0; i<workers.length; i++){
        if (workers[i].salary>1000){
            WorthyWorkers.push(workers[i].name)  
        }
    };
    return WorthyWorkers;
}

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

console.log(getWorthyWorkers(workers))

/////3-я задача////////////////////////////

function isHtml (url){
    return url.slice(url.length-5) == '.html'
    // const length = url.length;
    // return url[length-1] == 'l' 
    //     && url[length-2] == 'm' 
    //     && url[length-3] == 't' 
    //     && url[length-4] == 'h' 
    //     && url[length-5] == '.';
}

const path = "/users/download/index.html"
console.log(isHtml(path))

/////4-я задача////////////////////////////

const isEven = number => {
    if (number % 2 == 0){
        return true;
    } 
    return false;
}

function filterArray(someArray, someFunction){
    var filteredValues = []
    for (i=0; i<someArray.length; i++){
        if (someFunction(someArray[i])){
            filteredValues.push(someArray[i])
        }
    }
    return filteredValues
}

const mixedArray = [3,13,74,14,66,15,22,4];
console.log(filterArray(mixedArray, isEven));
