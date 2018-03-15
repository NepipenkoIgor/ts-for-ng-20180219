type StringOrNumber = string | number;

export function isInArray(arrayToCompare: StringOrNumber[], ...anyArguments: StringOrNumber[]): boolean {
    if (!(Array.isArray(arrayToCompare) && arrayToCompare.length
            && Array.isArray(anyArguments) && anyArguments.length)) {
        throw new Error('Check the arguments');
    }
    return anyArguments.every((elem) => arrayToCompare.includes(elem));
}
