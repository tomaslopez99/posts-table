export const filterArrayByValue = (array: any[], text: string) => {
    return array.filter(o => Object.keys(o).some(k => o[k].toString().toLowerCase().includes(text.toLowerCase())));
}
