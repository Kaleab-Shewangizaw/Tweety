import mainData from "./data.js"; // Keep the import
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// Use the imported mainData directly
let data = mainData;

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
  if (e.target.dataset.delete) {
    data = data.filter((tweet) => tweet.uuid !== e.target.dataset.delete);
    render();
  }
  if (e.target.dataset.replies) {
    document
      .getElementById(e.target.dataset.replies)
      .classList.toggle("hidden");
  }

  if (e.target.dataset.reply) {
    const tweet = data.find((tweet) => tweet.uuid === e.target.dataset.reply);
    document.getElementsByTagName("main")[0].innerHTML += `
    <section class="add-reply" id="add-reply">
        <div class="rply-container">
          <button id="close-btn" class="close">X</button>
          <h3>Reply to <span>${tweet.handle}</span>'s post</h3>
        <form action="" id="reply-form" data-reply="${tweet.uuid}">
          <textarea
            name="reply-text"
            id="reply-text"
            placeholder="reply here"
          ></textarea>
          <button type="submit">reply</button>
        </form>
        </div>
      </section>
    `;

    // Add functionality to the close button immediately after adding it
    document.getElementById("close-btn").addEventListener("click", () => {
      document.getElementById("add-reply").remove();
    });

    document.getElementById("reply-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const reply = document.getElementById("reply-text");
      reply.value.trim();
      if (reply.value === "") return;
      tweet.replies.unshift({
        handle: "Twimba",
        pfp: "images/pp2.jpg",
        content: reply.value,
      });
      reply.value = "";
      render();
      document.getElementById("add-reply").remove();
    });
  }
});




document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const tweet = document.getElementById("tweet-text");
  tweet.value.trim();
  if (tweet.value === "") return;
  data.unshift({
    handle: "Twimba",
    pfp: "images/pp2.jpg",
    content: tweet.value,
    isLiked: false,
    isRetweeted: false,
    likes: 0,
    retweets: 0,
    uuid: uuidv4(),
    replies: [],
  });

  tweet.value = "";
  render();
});

function createFeed() {
  let feed = "";

  data.forEach((data) => {
    let rply = "";
    if (data.replies.length > 0) {
      data.replies.forEach((reply) => {
        rply += `
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
      `;
      });
    }
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
            <span class="comment" id="comment" data-replies="${
              data.uuid
            }"> <i class="fa-regular fa-comment" data-reply = "${data.uuid}"></i> ${
      data.replies.length
    }</span>

            <span class="heart ${data.isLiked ? "liked" : ""}" > <i class="${
      data.isLiked ? "fa-solid" : "fa-regular"
    } fa-heart" data-likes="${data.uuid}"></i>${data.likes}</span>

            <span class="retweet ${
              data.isRetweeted ? "retweeted" : ""
            }" > <i class="fas fa-retweet" data-retweets="${data.uuid}"></i> ${
      data.retweets
    }</span>

            <span class="share"> <i class="fa-solid fa-trash" data-delete="${data.uuid}"></i>Delete</span>
          </div>
          <div class="replies hidden" id = "${data.uuid}">
          ${rply}
          </div>
        </div>
        
    `;
  });
  return feed;
}

function render() {
  document.getElementById("feed").innerHTML = createFeed();
}

render();