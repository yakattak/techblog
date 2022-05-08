async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#blog_post-title').value;
    const topic = document.querySelector('#blog_post-topic').value;
    const date = new Date();
    //const time = document.querySelector('#blog_post-time').value;
    const blogText = document.querySelector('#blog_post-blogText').value;


// CODE TO CHANGE THE DATE FORMAT, STILL WORK IN PROGRESS

    // document.querySelector("#blog_post-date").value.addEventListener("change", function() {
    //     this.setAttribute(
    //         "data-date",
    //         moment(this.value, "YYYY-MM-DD")
    //         .format( this.getAttribute("data-date-format") )
    //     )
    // })
    // const date = document.getAttribute('data-date');
    // console.log(date);
    
    const response = await fetch(`/api/blog_posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            topic,
            date,
            blogText
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const json = await response.json()
        console.log("zebra", json);


        console.log("lion");
        document.location.replace(`/profile`);
        
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-blog_post-form').addEventListener('submit', newFormHandler);
