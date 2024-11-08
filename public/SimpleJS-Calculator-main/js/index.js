const userLabel = document.querySelector('#userLabel');
const subLabel = document.querySelector('#subLabel');
const btnsArr = document.querySelectorAll('.btns');
const cursor = document.getElementById('cursor');
const shortcutTips = document.getElementById('shortcutTips');
const titleSpan = document.getElementById('title');

btnsArr.forEach(e => {
    e.onclick = () => calculation(e.value);
})
window.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.altKey) {
        calculation('alt+' + e.key)
    } else if (e.ctrlKey) {
        calculation('ctrl+' + e.key)
    }
    calculation(e.key)
})

let claculationSign = '';

function calculation(id) {
    if (userLabel.textContent.includes("Invalid Expersion")) {
        userLabel.textContent = '';
        cursor.textContent = '';
        userLabel.style.color = 'black';
        cursor.style.color = 'black';
        userLabel.append(cursor)
    }
    subLabel.textContent = " Calculating..."
    switch (id) {
        case '1':
            cursor.textContent = cursor.textContent + 1;
            shortcutTips.classList.remove('showTips')
            break;
        case '2':
            cursor.textContent = cursor.textContent + 2;
            shortcutTips.classList.remove('showTips')
            break;
        case '3':
            cursor.textContent = cursor.textContent + 3;
            shortcutTips.classList.remove('showTips')
            break;
        case '4':
            cursor.textContent = cursor.textContent + 4;
            shortcutTips.classList.remove('showTips')
            break;
        case '5':
            cursor.textContent = cursor.textContent + 5;
            shortcutTips.classList.remove('showTips')
            break;
        case '6':
            cursor.textContent = cursor.textContent + 6;
            shortcutTips.classList.remove('showTips')
            break;
        case '7':
            cursor.textContent = cursor.textContent + 7;
            shortcutTips.classList.remove('showTips')
            break;
        case '8':
            cursor.textContent = cursor.textContent + 8;
            shortcutTips.classList.remove('showTips')
            break;
        case '9':
            cursor.textContent = cursor.textContent + 9;
            shortcutTips.classList.remove('showTips')
            break;
        case '0':
            cursor.textContent = cursor.textContent + 0;
            shortcutTips.classList.remove('showTips')
            break;
        case '.':
            cursor.textContent = cursor.textContent.includes('.') ? cursor.textContent + '' : cursor.textContent + '.';
            shortcutTips.classList.remove('showTips')
            break;
        // calculation btns
        case '+':
            addition()
            shortcutTips.classList.remove('showTips')

            break;
        case '-':
            substraction()
            shortcutTips.classList.remove('showTips')

            break;
        case 'x':
            multiplication()
            shortcutTips.classList.remove('showTips')

            break;
        case '*':
            multiplication()
            shortcutTips.classList.remove('showTips')

            break;
        case '/':
            division()
            shortcutTips.classList.remove('showTips')

            break;
        case '%':
            modules()
            shortcutTips.classList.remove('showTips')

            break;
        case '^':
            power()
            shortcutTips.classList.remove('showTips')

            break;
        case '√':
            sqrt()
            shortcutTips.classList.remove('showTips')

            break;
        case 'alt+q':
            sqrt()
            shortcutTips.classList.remove('showTips')

            break;
        case 'sin':
            sin()
            shortcutTips.classList.remove('showTips')

            break;
        case 's':
            sin()
            shortcutTips.classList.remove('showTips')

            break;
        case 'cos':
            cos()
            shortcutTips.classList.remove('showTips')

            break;
        case 'c':
            cos()
            shortcutTips.classList.remove('showTips')

            break;
        case 'tan':
            tan()
            shortcutTips.classList.remove('showTips')

            break;
        case 't':
            tan()
            shortcutTips.classList.remove('showTips')

            break;
        case '=':
            equles()
            shortcutTips.classList.remove('showTips')

            break;
        case 'Enter':
            equles()
            shortcutTips.classList.remove('showTips')
            break;
        case 'ArrowRight':
            moveCursarRight()
            shortcutTips.classList.remove('showTips')

            break;
        case 'ArrowLeft':
            moveCursarLeft()
            shortcutTips.classList.remove('showTips')

            break;
        case 'Backspace':
            cursor.textContent = cursor.textContent.slice(0, -1);
            subLabel.textContent = "Deleting Digits!"
            shortcutTips.classList.remove('showTips')

            break;
        case 'Clear':
            cursor.textContent = '';
            subLabel.textContent = "Start Calculating!"
            shortcutTips.classList.remove('showTips')

            break;
        case 'Delete':
            cursor.textContent = '';
            subLabel.textContent = "Start Calculating!"
            shortcutTips.classList.remove('showTips')

            break;
        case 'ctrl+Backspace':
            cursor.textContent = '';
            subLabel.textContent = "Start Calculating!";
            shortcutTips.classList.remove('showTips')

            break;
        default:
            subLabel.textContent = "Start Calculating!";
            shortcutTips.classList.add('showTips')
    }
}

function moveCursarLeft() {
    let oldCursorText = cursor.textContent.charAt(cursor.textContent.length - 1)
    userLabel.textContent = oldCursorText + userLabel.textContent.replace(cursor.textContent, '');
    cursor.textContent = cursor.textContent.slice(0, -1);
    userLabel.prepend(cursor)
}
function moveCursarRight() {
    let oldUserLabelText = userLabel.textContent.replace(cursor.textContent, '').trim();
    if (oldUserLabelText) {
        cursor.textContent = cursor.textContent + userLabel.textContent.replace(cursor.textContent, '')[0];
        userLabel.textContent = oldUserLabelText.replace(oldUserLabelText.charAt(0), '');
        userLabel.prepend(cursor)
    }
}

function addition() {
    claculationSign = "+";
    cursor.textContent = cursor.textContent + claculationSign;

}
function substraction() {
    claculationSign = "-";
    cursor.textContent = cursor.textContent + claculationSign;

}
function division() {
    claculationSign = "/";
    cursor.textContent = cursor.textContent + claculationSign;

}
function multiplication() {
    claculationSign = "*";
    cursor.textContent = cursor.textContent + claculationSign;

}
function modules() {
    claculationSign = "%";
    cursor.textContent = cursor.textContent + claculationSign;

}
function power() {
    claculationSign = '**';
    cursor.textContent = cursor.textContent + '^';

}
function sqrt() {
    claculationSign = "√("
    cursor.textContent = claculationSign + cursor.textContent + ")";
}
function degToRad (degrees){
    return degrees * (Math.PI / 180)
}
function sin() {
    claculationSign = "sin("
    cursor.textContent = claculationSign + cursor.textContent + ")";
}
function cos() {
    claculationSign = "cos("
    cursor.textContent = claculationSign + cursor.textContent + ")";
}
function tan() {
    claculationSign = "tan("
    cursor.textContent = claculationSign + cursor.textContent + ")";
}

function equles() {
    try {
        if (cursor.textContent.includes('^')) {
            cursor.textContent = eval(userLabel.textContent.replace('^', "**"));
            userLabel.textContent = '';
            userLabel.append(cursor);
        }
        else if (cursor.textContent.includes('√')) {
            cursor.textContent = eval(userLabel.textContent.replace(/√/g, `Math.sqrt`));
            userLabel.textContent = '';
            userLabel.append(cursor);
        } else if (cursor.textContent.includes("sin")) {

            let degrees = userLabel.textContent.replace(/sin\(/g , '').replace(/\)/g, '');
            cursor.textContent = eval(userLabel.textContent.replace(/sin/g, 'Math.sin').replace(`${Number(degrees)}`, 'degToRad(degrees)'));
            userLabel.textContent = '';
            userLabel.append(cursor);

        } else if (cursor.textContent.includes("cos")) {

            let degrees = userLabel.textContent.replace(/cos\(/g , '').replace(/\)/g, '');
            if(Number(degrees) === 90){
            cursor.textContent = 0;
            userLabel.textContent = '';
            userLabel.append(cursor);
            }else{
                cursor.textContent = eval(userLabel.textContent.replace(/cos/g, 'Math.cos').replace(`${Number(degrees)}`, 'degToRad(degrees)'));
                userLabel.textContent = '';
                userLabel.append(cursor);
            }

        } else if (cursor.textContent.includes("tan")) {
            
            let degrees = userLabel.textContent.replace(/tan\(/g , '').replace(/\)/g, '');
            
            if(Number(degrees) === 90){
                cursor.textContent = NaN;
                userLabel.textContent = '';
                userLabel.append(cursor);
            }else{
                cursor.textContent = eval(userLabel.textContent.replace(/tan/g, 'Math.tan').replace(`${Number(degrees)}`, 'degToRad(degrees)'));
                userLabel.textContent = '';
                userLabel.append(cursor);
            }
        }
        subLabel.textContent = "Calculation Completed."
        cursor.textContent = eval(userLabel.textContent);
        userLabel.textContent = '';
        userLabel.append(cursor);
    } catch (err) {
        cursor.textContent = "Invalid Expersion Please Try A new one!";
        userLabel.style.color = 'red';
        subLabel.textContent = 'Calculation Failed!';
    }
}


function autoType (text = ''){
    let titleValue = text;
    let subInterval;
    let mainInerval = setInterval(()=>{
        if(titleSpan.textContent === ''){
            clearInterval(mainInerval);
            subInterval = setInterval(()=>{
                if(titleSpan.textContent.length === 'Calculator Devloped By: Ezatullah Ghafoori.'.length-1){
                    clearInterval(subInterval);
                    let timeout1 = setTimeout(()=>{
                        autoType(text)
                        clearInterval(timeout1)
                    }, 1000)
                }
                titleSpan.textContent = titleSpan.textContent + titleValue[0];
                titleValue = titleValue.slice(1)
            },500)

        }
        titleSpan.textContent = titleSpan.textContent.slice(0, -1)
    }, 500)
}
autoType('Calculator Devloped By: Ezatullah Ghafoori.')