import data from "./data.js";

document.addEventListener("click", (e) => {

    if (e.target.dataset.likes) {
        let tweet = data.find((tweet) => tweet.uuid === e.target.dataset.likes);
        if (tweet.isLiked) {
            tweet.likes--;
            tweet.isLiked = false;
        } else {
            tweet.likes++;
            tweet.isLiked = true;
        }
        render();
    }
    if (e.target.dataset.retweets) {
      let tweet = data.find((tweet) => tweet.uuid === e.target.dataset.retweets);
      if (tweet.isRetweeted) {
          tweet.retweets--;
          tweet.isRetweeted = false;
      } else {
          tweet.retweets++;
          tweet.isRetweeted = true;
      }
      render();
  }
  if (e.target.dataset.shares) {
    let tweet = data.find((tweet) => tweet.uuid === e.target.dataset.shares);
    if (tweet.isShared) {
        tweet.shares--;
        tweet.isShared = false;
    } else {
        tweet.shares++;
        tweet.isShared = true;
    }
    render();
}
})

function createFeed() {
  let feed = "";

  data.forEach((data) => {
    let rply = "";
    data.replies.forEach((reply) => {
      rply += `<div class="replies">
        <div class="reply">
          <div class="reply-header">
            <img src=${reply.pfp} alt="tweet-account" />
            <h3>${reply.handle}</h3>
          </div>
          <div class="reply-content">
            <p>
              ${reply.content}
            </p>
          </div>
        </div>
      </div>`;
    });
    feed += `
        <div class="tweet">
          <div class="tweet-header">
            <img src="${data.pfp}" alt="tweet-account" class="handle-pic" />
            <h3 class="handle">${data.handle}</h3>
          </div>
          <div class="tweet-content"> 
            <p>
              ${data.content}
            </p>
          </div>
          <div class="tweet-footer">
            <span class="comment" > <i class="fa-regular fa-comment" data-replies="${data.uuid}"></i> ${data.replies.length}</span>

            <span class="heart ${data.isLiked ? "liked" : ""}" > <i class="${data.isLiked ? "fa-solid": 'fa-regular'} fa-heart" data-likes="${data.uuid}"></i>${data.likes}</span>

            <span class="retweet ${data.isRetweeted ? "retweeted" : ""}" > <i class="fas fa-retweet" data-retweets="${data.uuid}"></i> ${data.retweets}</span>

            <span class="share ${data.isShared ? "shared" : ""}" > <i class="fa-solid fa-share" data-shares="${data.uuid}"></i> ${data.shares}</span>
          </div>
          ${rply}
        </div>
        
    `;
  });
  return feed;
}

function render() {
  document.getElementById("feed").innerHTML = createFeed();
}

render();
