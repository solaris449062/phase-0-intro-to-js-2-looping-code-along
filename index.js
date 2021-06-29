function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let newMessage = "Thank you, " + names[i] + ", for the wonderful " + eventName + " gift!"; 
        messages = [...messages, newMessage];
    }
    return messages;
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));
// countDown(10)