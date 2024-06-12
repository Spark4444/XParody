// Form for creating a new post
let post = `
    <form class="postForm">
    <textarea maxlength="50" class="titlePost" spellcheck="false" required placeholder="Write your title here"></textarea>
    <textarea maxlength="500" class="postText" spellcheck="false" required placeholder="Write your post here"></textarea>
    <div class="limit2">0/50</div>
    <br>
    <div class="limit">0/500</div>
    <input type="submit" id="btn" value="post">
    </form>`;

// Home page content
let home = `Welcome to the main page!`;

// List of posts
let posts =  
    `<div class="Posts">
    <h2>Posts</h2>
    <a href="#/posts/1" class="post">post 1</a>
    <br>
    <br>
    <a href="#/posts/2" class="post">post 2</a>
    <br>
    <br>
    <a href="#/posts/3" class="post">post 3</a>
    </div>`;

// Content of the first post
let post1 = `
    <div class="Posts">
    <h2 class="title">Hello this is Mr Beast and im trying to raise money for charity.</h2>
    <div class="text">Hello this is Mr Beast and im trying to raise money for charity <br> and if you want to help poor child in africa then donate using this link : <a href=totalyNotScamLink.com">totalyNotScamLink.com</a></div>
    <br>
    <a href="#/posts" class="backToMain">Back to posts</a>
    </div>`;

// Content of the second post
let post2 = `
    <div class="Posts">
    <h2 class="title">Jeff Bozos is bying X</h2>
    <div class="text">Jeff Bozos is bying X.<br>Jeff bozos wants to buy the X from Elon Musk for 1 million dollars.<br>Thats a huge price.</div>
    <br>
    <a href="#/posts" class="backToMain">Back to posts</a>
    </div>`;

// Content of the third post
let post3 = `
    <div class="Posts">
    <h2 class="title">The animatronics do get a bit quirky at night</h2>
    <div class="text">Yes as the title says the animatronics do get a bit quirky at night.</div>
    <br>
    <a href="#/posts" class="backToMain">Back to posts</a>
    </div>`; 

// About page content
let about = 
    `<div class="About">
    <h2>About</h2>
    <div class="about">This is X a website where you can post anything</div>
    </div>`;

// Error page content
let error = `<h1>Error 404</h1><a href="index.html">Go home</a>`;
