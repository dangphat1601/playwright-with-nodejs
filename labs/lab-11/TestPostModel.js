// TestPostModel.js
const readline = require('readline-sync');
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    // const userId = 1;
    // const postId = 5;
    const userId = Number(readline.question('Please enter user ID: '));
    const postId = Number(readline.question('Please enter post ID: '));

    // Create RequestHandler object
    const handler = new RequestHandler();
    const post = await handler.printTargetPost(userId, postId);
    const allPosts = await handler.printAllPosts(userId);
}