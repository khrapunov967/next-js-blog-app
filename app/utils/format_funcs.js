
export const getTruncatedText = (text, start, end) => {
    return (end - start <= text) ? text : `${text.slice(start, end + 1)}...`;
};