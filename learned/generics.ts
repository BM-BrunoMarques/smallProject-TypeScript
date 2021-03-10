// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({ name: 'Bruno', hobbies: ['Sports'] }, { age: 27 });
console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = `Got ${element.length} element.`
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`

    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({ name: 'Bruno' }, 'name')

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.unshift(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Bruno');
textStorage.addItem('Filipe');
textStorage.removeItem('Bruno');
console.log(textStorage.getItems());