console.log('h')

function createLinkedList() {
    let list = [];

    function append(value) { // possible error here
        const newNode = createNode(value)
        tail().nextNodeLink = newNode;
        list.push(newNode)
        
    }

    function prepend(value) {
        const newNode = createNode(value)
        newNode.nextNodeLink = head();
        list.unshift(newNode)
    }

    function size() {
        return list.length
    }

    function head() {
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

