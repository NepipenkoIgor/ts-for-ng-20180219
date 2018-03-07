type StringOrNumber = string | number;

export function getUnique(...params: StringOrNumber[]): StringOrNumber[] {
    return Array.from(new Set(params));
}
