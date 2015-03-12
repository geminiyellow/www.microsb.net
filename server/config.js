module.exports = {
    db: process.env.MONGOLAB_URI || 'localhost',
    clientSecret: process.env.clientSecret || '57e945cc72cd4c5abfd8a08cbfd08de0',
    tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};