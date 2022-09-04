function myEach(collection, callback) {
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    for (const element of collectionElements) {
        callback(element)
    }
    return collection
}
function myMap(collection, callback) {
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let newCollection = []
    for (const element of collectionElements) {
        newCollection.push(callback(element))
    }
    return newCollection
}
function myReduce(collection, callback, accumulator) {
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    if (typeof accumulator === "number") {
        for (const element of collectionElements) {
            accumulator = callback(accumulator, element, collectionElements)
        }
    } else {
        accumulator = parseInt(collectionElements.slice(0, 1))
        let newCollection = collectionElements.slice(1)
        for (let element of newCollection) {
            element = parseInt(element)
            accumulator = callback(accumulator, element, collectionElements)
        }
    }
    return accumulator
}

function myFind(collection, predicate) {
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    for (const element of collectionElements) {
        if (predicate(element)) {
            return element
        }
    }
}
function myFilter(collection, predicate) {
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let filteredCollection = []
    for (const element of collectionElements) {
        if (predicate(element)) {
            filteredCollection.push(element)
        }
    }
    return filteredCollection
}
function mySize(collection) {
    
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let counter = 0
    for (const element of collectionElements) {
        counter++
    }
    return counter
}

function myFirst(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(0, noOfElementsToReturn)
    } else {
        return listOfElements[0]
    }
}
function myLast(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(-noOfElementsToReturn)
    } else {
        return listOfElements[mySize(listOfElements) - 1]
    }
}
function myKeys(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(key)
    }
    return newArray
};
function myValues(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(object[key])
    }
    return newArray
}