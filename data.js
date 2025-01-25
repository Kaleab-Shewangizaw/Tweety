import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let data = [
  {
    handle: "Twimba",
    pfp: "images/pp2.jpg",
    content: "this is the contnet of my post",
    isLiked: false,
    isRetweeted: false,
    likes: 11,
    retweets: 10,
    uuid: uuidv4(),
    replies: [
      {
        handle: "Github",
        pfp: "images/pp3.png",
        content: "I agree with you, Twimba!",
      },
      {
        handle: "Kaleab",
        pfp: "images/pp1.jpg",
        content: "Can't agree more!",
      },
    ],
  },
  {
    handle: "Kaleab",
    pfp: "images/pp6.webp",
    content: "this is the contnet of my post",
    isLiked: false,
    isRetweeted: false,
    likes: 110,
    retweets: 100,
    uuid: uuidv4(),
    replies: [
      {
        handle: "Github",
        pfp: "images/pp3.png",
        content: "I agree with you, Twimba!",
      },
      {
        handle: "Kaleab",
        pfp: "images/pp1.jpg",
        content: "Can't agree more!",
      },
      {
        handle: "Kaleab",
        pfp: "images/pp1.jpg",
        content: "Can't agree more!",
      },
    ],
  },
  {
    handle: "Someone",
    pfp: "images/pp4.jpg",
    content: "this is the contnet of my post",
    isLiked: false,
    isRetweeted: false,
    likes: 123,
    retweets: 110,
    uuid: uuidv4(),
    replies: [],
  },

  {
    handle: "Elon Musk",
    pfp: "images/pp7.webp",
    content: "this is the contnet of my post",
    isLiked: false,
    isRetweeted: false,
    isShared: false,
    likes: 270,
    retweets: 199,
    uuid: uuidv4(),
    replies: [
      {
        handle: "Kaleab Shewangizaw",
        pfp: "images/pp3.png",
        content: "I agree with you, Twimba!",
      },
    ],
  },
];

export default data;
