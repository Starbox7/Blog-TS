import {Schema, model, Model} from "mongoose";

interface DBPost {
    description: string,
    user_id: string,
    postPic: any,
}

interface DBPostModel extends Model<DBPost>{}

const PostSchema = new Schema<DBPost>({
    description: { 
    type: String,
    required: true,
},
user_id : {
    type: String,
    required: true,
},
postPic: {
    type: Array,
    required: true
}
}, {timestamps: true})

const Post = model<DBPost, DBPostModel>("posts", PostSchema)

export {Post}