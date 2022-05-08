async function upvoteClickHandler(event) {
    event.preventDefault();
  
    // console.log(event.target.innerHTML)
    // // const id = window.location.toString().split('/')[
    // //   window.location.toString().split('/').length - 1
    // ];

    //use these const's to pass in the contributor_id and blog_post_id for the upvote method in models/Blog_Post.js
    const blog_postString = event.target.querySelector('.id-span').innerHTML;
    const blog_post = parseInt(blog_postString);

    // console.log("blog_post", blog_post)

    //let params = new URLSearchParams(document.location.search)
    //const contributor = session.contributor_id;
    
    // console.log(contributor, blog_post);
      
    const response = await fetch('/api/blog_posts/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        blog_post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  // document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);