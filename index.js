axios.get('https://tarmeezacademy.com/api/v1/posts?limit=50')
  .then(response  => {
    // console.log(post);
    if (response.status == 200) {
      const posts = response.data.data
      console.log("ok")
      showPosts(posts)
    }
  })
  .catch(error => {
    // handle error
    console.log(error);
  })

  // show post in ui
const showPosts = function(posts) {
  document.getElementById('posts').innerHTML = ''
  console.log(posts)
  for (post of posts) {
    console.log(post)
    const content = `
      <div class="post">
                <div class="post-top">
                    <div class="dp">
                        <img src="${post.image}" alt="">
                    </div>
                    <div class="post-info">
                        <p class="name">${post.username
                        }</p>
                        <span class="time">${post.
                          created_at
                          }</span>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>

                <div class="post-content">
                  ${post.body}
                </div>
                
                <div class="post-bottom">
                    <div class="action">
                        <i class="far fa-thumbs-up"></i>
                        <span>Like</span>
                    </div>
                    <div class="action">
                        <i class="far fa-comment"></i>
                        <span>Comment</span>
                    </div>
                    <div class="action">
                        <i class="fa fa-share"></i>
                        <span>Share</span>
                    </div>
                </div>
            </div>    
    `
    document.getElementById('posts').innerHTML += content


  } }
