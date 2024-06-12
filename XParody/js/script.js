// Select the main layout of the document
let layout = document.querySelector("main");

// Declare variables for text areas and word tracker
let textArea;
let textArea2;
let wordsTracker;

// Initialize post number
let postNum = 3;

// Define routes for the application
let routes = [
    { path: "/post", component: post },
    { path: "/", component: home },
    { path: "", component: home },
    { path: "/posts", component: posts },
    { path: "/posts/1", component: post1 },
    { path: "/posts/2", component: post2 },
    { path: "/posts/3", component: post3 },
    { path: "/about", component: about },
    { path: undefined, component: error },
];

// Function to update the routes
function updateRoutes() {
    routes[3].component = posts;
}

// Function to create a new post
function newPost() {
    posts = posts.slice(0, -6);
    posts += `<br><br><a href="#/posts/${postNum}" class="post">post ${postNum}</a></div>`;
    updateRoutes();
    routes.push({
        path: `/posts/${postNum}`, 
        component: `<div class="Posts">
        <h2 class="Title">${textArea2.value}</h2>
        <div class="Text">${textArea.value}</div>
        <br>
        <a href="#/posts" class="backToMain">Back to posts</a>
        </div>` 
    });
}

// Function to get the current hash
function getHash() {
    const hash = window.location.hash.slice(1);
    return hash;
}

// Function to render the page based on the current route
function render() {
    let inside;
    let worked = false;
    routes.forEach(route => {
        if (route.path === getHash() && worked == false) {
            path = route.path;
            inside = route.component;
            worked = true;    
        } else if (worked == false) {
            path = routes[routes.length - 1].path;
            inside = routes[routes.length - 1].component;
        }
        if (route.path == "/post") {
            setTimeout(() => {
                if (document.querySelector('form')) {
                    document.querySelector('form').addEventListener('submit', function(event) {
                        event.preventDefault();
                        postNum++;
                        window.location.hash = `#/posts/post${postNum}`;
                        newPost();
                    });
                    textArea = document.querySelector(".titlePost");
                    textArea2 = document.querySelector(".postText");
                    wordsTracker = setInterval(() => {
                        document.querySelector(".limit2").innerHTML = `${textArea.value.length}/50`;
                        document.querySelector(".limit").innerHTML = `${textArea2.value.length}/500`;
                    }, 10);
                }
            }, 100);
        } else {
            clearInterval(wordsTracker);
        }
        layout.innerHTML = inside;
    });
}

// Add event listener for hash change and render the page
addEventListener("hashchange", function() {
    render();
});

// Initial render of the page
render();