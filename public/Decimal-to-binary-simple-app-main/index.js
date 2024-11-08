// this function's job is to conver the number to binary
function toBinary(number){ // here we accept one arguments 
    // this var is created to hold the result
    let result = [];
    // and this the loop for searching for processing the result
    for(;number >= 1;){
        // this condition checks if the % of the number in the cunrunt otration is 0 or not
        if(number%2){
            // we unshift the reminder of the number arg by two
            result.unshift(String(number % 2));
            // we already checked that the remindre is not zero
            // so we want to substract one from the number that it can't become
            // a floating number 
            number = (number-1)/2;
        }else{
            // but if the reminder was 0 so we don't need to subsract one from it
            // so we stroe the reminder in the result var 
            result.unshift(String(number % 2));
            // and than directly divid number by two
            number = number / 2;
        }
    }
    // at the end we are going to return the result
    return result;
}
// this function's job is to convert the number to Octal
function toOctal(resultArg, number){ // we accept two argument the number to conver it and it's binary form 
    // we first create a digits array that we can 
    let digits = []
    // and next we going to create the child of the digits array 
    let chiledOf = [];
    // the var is used in the loop to store the itration count from resultArg.length
    let itrationCountForLoop = resultArg.length-1;
    // this for loop is created to Process the main aim of the function
    for(let i = 0; i <= itrationCountForLoop; i++){
        // there it check that the childs of the childOf array is >= 3 or becuse grouping then for oct three bits
        if(chiledOf.length >= 3){
            // if it was so assign it to the digits array
            digits.push(chiledOf);
            // we make it empty to fill it fron scratch
            chiledOf = []
        }
        // if it wasn't just push the poped item to the childOf array
        chiledOf.push(resultArg.pop())
    }
    // after the for loop is completed just push the reminded element of childOf array to the digits array
    digits.push(chiledOf)
    // this var is created to return the result to the caller
    let result = '';
    // we should up tis var by the power of defferent number Like(1, 2, 3)
    let powerOfDigit = 2;
    // this is used to hold the looping length because it going to be change when the loop is started
    let loopLength = digits[number.length]? number.length: number.length-1;
    // this is the loop which is used to process the result and comlete the output
    for(i = 0; i <= loopLength ; i++){
        // this is used to hold the result that must not be a string 
        let noneStrResult = 0;
        // this is the  key var which we up powerOfDigit var by the power of this elemnt
        var k = 0;
        // this is the that canitrat for the each element of the digits array that we have created it and completed it 
        digits[i].forEach(e=>{
            // this checks if it was 1 we can count on it else not 
            if(e === '1'){
                // we shoul up noneStrResult by power of k var
                noneStrResult += powerOfDigit**k;
                // and increment k in each itration if the condition was true
                k++
            }
            else{
                // just increment the k 
                k++
                return
            }
        })
        // conver the noneStrResult into string and than add it to the result variable
        result = String(noneStrResult) + result;
    }
    // finally return the result variable
    return  result;
}



// this function is used to cal the above function and render the result to the DOM
function numConverter (){
    const inputNum = document.getElementById('add')
    const outputBinary = document.getElementById('binary')
    const outputOctal = document.getElementById('octal')
    let num = inputNum.value;
    let binaryResult = toBinary(num);
    outputBinary.textContent = binaryResult.toLocaleString().replace(/,/g, '')
    console.log(...binaryResult)
    let octResult = toOctal(binaryResult, num)
    outputOctal.textContent = octResult;
}