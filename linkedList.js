function createLinkedList() {
    let list = [];

    function append(value) { // adds item to the end of the list
        const newNode = createNode(value)
        if (!tail()) {
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

    function head() { // returns the first element
        return list.find(Boolean) // probably shouldn't use list
    }

    function tail() {  // returns the last element // may need to refactor to NOT use indexes
        // if () {
        //     return
        // } else {
        //     return 
        // }
        return list.slice(-1)[0] // probably shouldn't use list
    }

    function at(index) { // DON'T USE ARRAY INDEX! list[0] is cheating!!
        if (index === 0) {
            return head(); // this needs to be bubbled up via a chain of returns
        } else {
            const item = at(index - 1) // use recursion: return at(index - 1)
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
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(4);
newLinkedList.prepend(3);
console.log(newLinkedList.tail().getValue())

