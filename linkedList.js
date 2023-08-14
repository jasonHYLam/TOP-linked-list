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

    function contains(value) { // return true if a certain value exists
        function getNextNodeRecursively(node, value) {
            if (node.getValue() === value) {
                return true
            } else if (node.getNextNodeLink() == null) {
                return false
            } else {
                const recursiveValue = getNextNodeRecursively(node.getNextNodeLink(), value) 
                return recursiveValue;
            }
        }
        return getNextNodeRecursively(head(), value)
    }

    function find(value) { // return index of node containing a value; null if not found
        function findIndexRecursively(node, value) {
            if (node.getValue() === value) {
                return 0;
            } else if (node.getNextNodeLink() === null) { // this will return null plus the counters
                return null;
            } else {
                const recursiveValue = findIndexRecursively(node.getNextNodeLink(), value);
                if (recursiveValue === null) return null;
                return recursiveValue + 1;
            }
        }
        return findIndexRecursively(head(), value)
    }

    function toString() { // print linked list as string
        function toStringRecursively(node) { // seems this would do things backwards
        //     if (node.getNextNodeLink() === null) {
        //         return `(${node.getValue().toString()})`; // i guess this would be unintelligible unless i worked on it before

        //     } else {
        //         let recursiveValue = toStringRecursively(node.getNextNodeLink());
        //         recursiveValue += ` -> (${node.getValue().toString()})`
        //         return recursiveValue;
        //     }
            
        // }
        // console.log(toStringRecursively(head()));

        if (node.getNextNodeLink() === null) {
            console.log(node.getValue())
            console.log(null)
        } else {
            console.log(node.getValue())
            return toStringRecursively(node.getNextNodeLink());
        }
    }
        toStringRecursively(head());
    }

    function insertAt(value, index) { // insert node at certain index
        function insertAtRecursively(node, value, index) {
            // how can i insert at index = 0?
            if (index === 0) {
                prepend(value)
            }
            else if (index === 1) { // index corresponding to node behind the created node
                const newNode = createNode(value)
                // and will have to change the new node's next node value
                newNode.setNextNodeLink(node.getNextNodeLink())
                // will have to change the previous value's next node
                node.setNextNodeLink(newNode)
            } else {
                return insertAtRecursively(node.getNextNodeLink(), value, index -1)
            }
        }
        insertAtRecursively(
            head(),
            value,
            index,
            )
    }

    function removeAt(index) { // remove node at certain index
        function recursiveFunction(node, index) {
            if (index === 1) {
                node.setNextNodeLink(node.getNextNodeLink().getNextNodeLink()) // set the previous node's next node to be the 2nd following node
            } else {
                return recursiveFunction(node.getNextNodeLink(), index - 1)
            }
        }
        recursiveFunction(head(), index)
    }

    return {
        append,
        prepend,
        size,
        head, 
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
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
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(10);
newLinkedList.append(4);
newLinkedList.prepend(3);
newLinkedList.insertAt(17,0)
newLinkedList.toString();
newLinkedList.removeAt(3)
newLinkedList.toString();

console.log('h')