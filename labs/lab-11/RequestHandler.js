// RequestHandler.js
const Post = require("./Post");
class RequestHandler {

    async printTargetPost(userId, postId) {
        const posts = await this._getAllPosts(userId);
        const target = posts.find(post => post.id === postId);
        if (!target) {
            console.log(`Post with ID ${postId} is not found for user ${userId}.`);
            return null;
        }
        const postModel = new Post(target.userId, target.id, target.title, target.body);
        console.log("Target Post:", postModel);
        return postModel;

    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let userPostsData = await this._getAllPosts(userId);
        const posts = [];
        for (const postData of userPostsData) {
            const postModel = new Post(postData.userId, postData.id, postData.title, postData.body);
            posts.push(postModel);
        }
        if (posts.length > 0) {
            console.log(`All posts for userID = ${userId}:`, posts);
        } else {
            console.log('No posts found for this user!');
        }
    }

    async _getAllPosts(userId) {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }
        const data = await response.json();
        if (userId) {
            return data.filter(post => post.userId === userId);
        }
        return data;
    }
}
module.exports = RequestHandler;