const books = [
    {
        id: "0",
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
    },
    {
        id: "1",
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

module.exports = {resolvers};
