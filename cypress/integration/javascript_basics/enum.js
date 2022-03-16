const browser = {
    CHROME : 'chrome',
    FF : 'firefox',
    EDGE : 'Edege',
    SAFARI : 'Safari'
}

let browsers = browsers.CHROME
function execute(){
    switch (browsers){
        case browsers.CHROME:
        console.log('execute chrome');
        break;

        case browsers.FF:
        console.log('execute firefox');
        break;

        case browsers.EDGE:
        console.log('execute edge');
        break;

        case browsers.SAFARI:
        console.log('execute safari');
        break;
    }
    
}