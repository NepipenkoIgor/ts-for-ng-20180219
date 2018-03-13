export function reverseString(text: string): string {
    const newString: string = text.split(' ')
        .map((word: string): string => {
            const anySymbolsArr: string[] = word.split('');
            const lettersArr: string[] = anySymbolsArr.filter((letter: string): boolean => isString(letter));
            const reverseArr: string[] = anySymbolsArr.map((str: string): string => {
                /*
                * reverseSting.ts(7,17): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
                * Type 'undefined' is not assignable to type 'string'.
                * wat?
                * */
                return isString(str)
                    ? lettersArr.pop()
                    : str;
            });
            return reverseArr.join('');
        }).join(' ');

    return newString;
}

function isString(arg: string): boolean {
    const reg: RegExp = /[a-zA-Z]/;
    return reg.test(arg);
}
