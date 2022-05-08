async function attendClickHandler(event) {
    event.preventDefault();
  
    // console.log(event.target.innerHTML)
    // // const id = window.location.toString().split('/')[
    // //   window.location.toString().split('/').length - 1
    // ];

    //use these const's to pass in the player_id and blog_post_id for the attend method in models/Blog_Post.js
    const blog_postString = event.target.querySelector('.id-span').innerHTML;
    const blog_post = parseInt(blog_postString);

    // console.log("blog_post", blog_post)

    //let params = new URLSearchParams(document.location.search)
    //const player = session.player_id;
    
    // console.log(player, blog_post);
      
    const response = await fetch('/api/blog_posts/attend', {
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
  
  // document.querySelector('.attend-btn').addEventListener('click', attendClickHandler);