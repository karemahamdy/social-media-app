
let baseUrl = "https://tarmeezacademy.com/api/v1/";

axios.get(`${baseUrl}posts?limit=50`)
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
  

  for (post of posts) {
    let postTitle = ''
    if(post.title != null) {
      postTitle = post.title 
    }
    const content = `
      <div class="post">
                <div class="post-top">
                    <div class="dp">
                        <img src="${post.image}" alt="">
                    </div>
                    <div class="post-info">
                        <p class="name">${post.author.
                          username
                        }</p>
                        <span class="time">${post.
                          created_at
                          }</span>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>

                <div class="post-content">
                  <p> ${post.body} </p>
                  <img class="w-100" src="${post.image}" alt="">
                  <p>${postTitle}</p>
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
    document.getElementById('posts').innerHTML += content;
  } }
  

  function onClickLogin() {

   const userName = document.getElementById("email").value 
   const password = document.getElementById("password").value 
   console.log(userName,password)

   const param = {
    "username": userName,
    "password" : password
   }
   axios.post(`${baseUrl}login`,param).then(response  => { 
    console.log(response.data)
    // add to local storage
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user", JSON.stringify(response.data.user))
   })
      window.location.assign("index.html");
  }
  onClickLogin()