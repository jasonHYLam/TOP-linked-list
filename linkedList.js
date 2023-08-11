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

        if (head()) newNode.setNextNodeLink(head());
        list.unshift(newNode)
    }

    function size() { // returns size of list
        return list.length // probably shouldn't use list
    }

    function head() { //tail sorta relies on this
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

    function pop() {

    }

    return {
        getValue,
        getNextNodeLink,
        setNextNodeLink,
    }
}

const newLinkedList = createLinkedList();
newLinkedList.append(10);
newLinkedList.append(4);
newLinkedList.prepend(3);
console.log(newLinkedList.tail().getValue())

