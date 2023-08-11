function createLinkedList() {
    let list = [];

    function append(value) { // possible error here
        const newNode = createNode(value)
        if (tail()) tail().setNextNodeLink(newNode);// edge case where adding the first element will not set next node link
        list.push(newNode)
    }

    function prepend(value) {
        const newNode = createNode(value)
        if (head()) newNode.setNextNodeLink(head());
        list.unshift(newNode)
    }

    function size() {
        return list.length
    }

    function head() {
        console.log(list.find(Boolean).getValue()) // returns the first element)
        return list.find(Boolean) // returns the first element
    }

    function tail() { //unsure if this works
        return list.slice(-1)[0] // returns the last element
    }

    function at(index) { // DON'T USE ARRAY INDEX! list[0] is cheating!!
        if (index === 0) {
            return head(); // this needs to be bubbled up and returned via a chain
        } else {
            const item = at(index - 1) // return at(index - 1) with smaller subset; this needs to create a chain
            console.log(item)
            return item.getNextNodeLink();
        }
    }

    return {
        append,
        prepend,
        size,
        head, 
        tail,
        at,
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
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(4);
console.log(newLinkedList.head())
newLinkedList.prepend(3);
console.log(newLinkedList.tail().getValue())
console.log(newLinkedList.head())
console.log(newLinkedList.at(2))
console.log(newLinkedList.size())

