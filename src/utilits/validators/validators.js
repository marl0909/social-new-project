export const required = value => {
    if(value) return undefined;
    return 'Post can`t be empty';
}

export const maxLengthCreator = (size) => value => {
    if(value.length > size) {
        return `Max length is ${size} symbols`;
    }
    return undefined;
}
