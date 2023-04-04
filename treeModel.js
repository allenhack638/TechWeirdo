import mongoose from "mongoose";
const { Schema } = mongoose;

const tree_schema = new Schema({
    root: {
        type: Number,
        default: undefined
    },
    node_num: {
        type: Number,
        required: true
    },
    val: {
        type: Number,
        required: true
    },
    left: {
        type: Number,
        default: null
    },
    right: {
        type: Number,
        default: null
    }
});

export default mongoose.model('Node', tree_schema);
