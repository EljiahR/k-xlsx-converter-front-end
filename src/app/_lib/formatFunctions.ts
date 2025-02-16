export const joinWithLast = (arr: string[], seperator: string, lastSeperator: string): string => {
    if (arr.length <= 1) {
        return arr.join('');
    }

    const last = arr.pop();
    return arr.join(seperator) + lastSeperator + last;
}