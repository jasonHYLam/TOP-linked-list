function createLinkedList() {
    let list = [];

    function append(value) { // adds item to the end of the list
        const newNode = createNode(value)
        if (list.length === 0) {
            list.push(newNode)
        } else {
            tail().setNextNodeLink(newNode);// edge case where adding the first element will not set next node link
        }
    }

    function prepend(value) { // adds item to the start of the list
        const newNode = createNode(value)
        if (list.length === 0) {
            list.push(newNode)
        } else {
            newNode.setNextNodeLink(head())
            list.shift();
            list.push(newNode)
        }
    }

    function size() { // returns size of list
        function getSizeRecursively(node) {
            if (node.getNextNodeLink() === null) {
                return 1;
            } else {
                return getSizeRecursively(node.getNextNodeLink()) + 1;
            }
        }
        return getSizeRecursively(head());
    }

    function head() { //many functions rely on this
        // how do i get reference to head of the list?
        return list.find(Boolean) // probably shouldn't use list
    }

    function tail() { //append relies on this
        function getTailRecursively(node) {
            if (node.getNextNodeLink() === null) {
                return node;
            } else {
                return getTailRecursively(node.getNextNodeLink())
            }
        }
        return getTailRecursively(head());
    }

    function at(index) { 
        if (index === 0) {
            return head();
        } else {
            const item = at(index - 1)
            return item.getNextNodeLink();
        }
    }

    function pop() { // 'remove' the last element; that might mean set its value to null
        function getTailRecursively(node) {
            if (node.getNextNodeLink().getNextNodeLink() === null) { // this is the second to last node. set its next node to null
                return node;
            } else {
                return getTailRecursively(node.getNextNodeLink())
            }
        }
        getTailRecursively(head()).setNextNodeLink(null); 
    }

    return {
        append,
        prepend,
        size,
        head, 
        tail,
        at,
        pop,
    }
}

function createNode(value = null) {
    let nodeValue = value;
    let nextNodeLink = null;

    function getValue() {
        return nodeValue;
    }
     
    function setValue(newValue) {
        nodeValue = newValue;
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
        setValue,
    }
}

const newLinkedList = createLinkedList();
newLinkedList.append(10);
newLinkedList.append(4);
newLinkedList.prepend(3);
console.log(newLinkedList.head().getValue())
console.log(newLinkedList.tail().getValue())
newLinkedList.pop();
console.log(newLinkedList.tail().getValue())

