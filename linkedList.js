console.log('h')

function createLinkedList() {
    let list = [];

    function append(value) { // possible error here
        const newNode = createNode(value)
        console.log(newNode)
        list.push(newNode)
        console.log(list)
    }

    function prepend(value) {
        const newNode = createNode(value)
        list.unshift(newNode)
    }

    function size() {
        return list.length
    }

    function testConsoleLog() {
        console.log(list)
    }

    function head() {
        console.log(list)
        console.log(list.find(Boolean))
        return list.find(Boolean).getValue() // returns the first element
    }

    function tail() {
        return list.slice(-1)[0] // returns the last element
    }

    return {
        append,
        prepend,
        size,
        head, 
        tail,
        testConsoleLog,

    }
}

function createNode(value = null) {
    let nodeValue = value;
    let nextNodeLink = null;

    function getValue() {
        return nodeValue;
    }

    return {getValue,}
}

const newLinkedList = createLinkedList();
newLinkedList.append(4); // possible error in append()
newLinkedList.append(10);
console.log(newLinkedList.head())
newLinkedList.prepend(3);
console.log(newLinkedList.head())

createLinkedList().testConsoleLog();

