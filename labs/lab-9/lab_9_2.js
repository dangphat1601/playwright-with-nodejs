const readline = require('readline-sync');

const postEndpoint = 'https://jsonplaceholder.typicode.com/posts';

main();

async function main() {
    const posts = await getData();
    let isInteracting = true;
    while (isInteracting) {
        showMenu();
        const userOption = getUserOption();
        switch (userOption) {
            case 1:
                getPostContent(posts);
                break;
            case 2:
                getRelatedPosts(posts);
                break;
            case 0:
                isInteracting = false;
                console.log("Goodbye!");
                break;
            default:
                console.log("Wrong option! Please try again.\n");
        }
    }
}

function showMenu() {
    console.log(`
    \n====MENU====
    1. Get post content
    2. Print all related posts
    0. Exit
    `);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

async function getData() {
    const response = await fetch(postEndpoint);
    if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
    }
    return await response.json();
}

function getPostContent(posts) {
    const userId = Number(readline.question('Please enter user id: '));
    const postId = Number(readline.question('Please enter post id: '));
    const post = posts.find(function (post) {
        return post.userId === userId && post.id === postId;
    })
    if (!post) {
        console.log("Post not found!");
    } else {
        console.log("Post content: " + post.body);
    }
}

function getRelatedPosts(posts) {
    const userId = Number(readline.question('Please enter user id: '));
    const relatedPosts = posts.filter(function (post) {
        return post.userId === userId;
    });
    if (relatedPosts.length === 0) {
        console.log("No posts found for this user.");
    } else {
        console.log("Found " + relatedPosts.length + " related posts:");
        relatedPosts.forEach(function (post) {
            console.log("- " + post.title);
        });
    }
}