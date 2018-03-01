function getUnique(...params: any[]): any[] {
    let newArray: any[] = [];
    for (let i of params) {
        if (newArray.indexOf(i) < 0) {
            newArray.push(i);
        }
    }
    return newArray;
}

let uniqArray = getUnique('a', 'a', 'b', 'b', 1, 2, 3, 1, 2, 3, 'c', 'c');
console.log(`oldArray = a,a,b,b,1,2,3,1,2,3,c,c
newArray = ${uniqArray}`);