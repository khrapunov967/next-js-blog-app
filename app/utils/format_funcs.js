
export const getSplittedPosts = (posts, numberInRow) => {
    let number = 0;
    let row = [];
    const splittedPosts = [];

    for (let i = 0; i < posts.length - 1; i++) {
        if (number === numberInRow - 1) {
            splittedPosts.push(row);
            row = [];
            number = 0;

        } else {
            row.push(posts[i]);
            number++;
        }
    };

    return splittedPosts;
};