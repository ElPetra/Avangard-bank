export const num2time = (num: number) => {
    let numToCorrect = num;
    if (num < 100) numToCorrect *= 100;
    const [_, hh, mm] = numToCorrect.toString().match(/(\d{1,2})(\d{2})$/);
    return `${hh.padStart(2, '0')}:${mm}`;
};
