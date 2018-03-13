/*
summator.ts(12,11): error TS2322: Type 'string | number' is not assignable to type 'number'.
Type 'string' is not assignable to type 'number'.
summator.ts(14,39): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
Type 'number' is not assignable to type 'string'.
summator.ts(20,16): error TS2365: Operator '+' cannot be applied to types 'string | number' and 'string | number'.
*/

type StringOrNumber = string | number;

export function summator(...params: StringOrNumber[]): number {
    const sum: number = params.reduce((previousValue: number, currentValue: StringOrNumber): number => {
        if (!typeOfNumber(currentValue)) {
            if (!typeOfString(currentValue)) {
                throw new Error('Check the params');
            }
        }
        if (typeOfString(currentValue)) {
            currentValue = parseFloat(currentValue);
            if (Number.isNaN(currentValue) || !Number.isFinite(currentValue)) {
                throw new Error('Check the params again');
            }
        }

        return previousValue + currentValue;
    });

    return sum;
}

function typeOfString(arg: any): boolean {
    return typeof arg === 'string';
}

function typeOfNumber(arg: any): boolean {
    return typeof arg === 'number';
}
