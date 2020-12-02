const Post = require('../../models/Post.model')
const checkAuth = require('../../utils/checkAuth.module')
const { AuthenticationError } = require('apollo-server');


module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 })
                return posts
            } catch (error) {
                throw new Error(error)
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId)
                if (post) {
                    return post;
                } else {
                    throw new Error('Post not founded!')
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    },

    Mutation: {
        async createPost(_, { body }, context) {
            const user = checkAuth(context);
            console.log(user)
            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createAt: new Date().toISOString()
            });

            const post = await newPost.save();
            return post;
        },

        async deletePost(_, { postId }, context) {
            const user = checkAuth(context)

            try {
                const post = await Post.findById(postId);
                if (user.username === post.username) {
                    await post.delete();
                    return 'Post deleted'
                } else {
                    throw new AuthenticationError('Cant deleted post')
                }
            } catch (error) {
                throw new Error(err);
            }
        }
    }
}