function createLinkedList() {
    let list = [];

    function append(value) { // possible error here
        const newNode = createNode(value)
        if (tail()) tail().setNextNodeLink(newNode);// tail doesn't exist when appending the first value
        list.push(newNode)
        
    }

    function prepend(value) {
        const newNode = createNode(value)
        console.log('s')
        newNode.setNextNodeLink(head());
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

    function getNextNodeLink() {
        return nextNodeLink;
    }

    function setNextNodeLink(nextNode) {
        nextNodeLink = nextNode;
    }

    return {
        getValue,
        getNextNodeLink,
        setNextNodeLink,
    }
}

const newLinkedList = createLinkedList();
newLinkedList.append(4); // possible error in append()
newLinkedList.append(10);
console.log(newLinkedList.head())
newLinkedList.prepend(3);
console.log(newLinkedList.head())

