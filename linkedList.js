console.log('h')

function createLinkedList() {
    let list = [];

    function append(value) {
        list.push(value)
    }

    function prepend(value) {
        list.unshift(value)
    }

    function size() {
        return list.length
    }

    function head() {
        return list.find(Boolean) // returns the first element
    }

    function tail() {
        return list.slice(-1)[0] // returns the last element
    }
}

function createNode() {
    let value = null;
    let nextNodeLink = null;
}