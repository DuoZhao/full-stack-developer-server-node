import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    liked: {type: Boolean, default: false},
    handle: String,
    avatarImage: String
}, {collection: 'tuits'});
export default schema;