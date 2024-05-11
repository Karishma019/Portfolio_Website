//
import e_cart_website from "../assets/e-cart_website.png";
import portfolio_website from "../assets/portfolio_website.png";
import task_management from "../assets/task-management-app.png";
import mern_app from "../assets/mern-app.png";

export const projectsData = [
  {
    title: "ShareZone App",
    description: `Introducing a full-stack application using the MERN stack (MongoDB, Express, React, and Node.js) that allows users to login, logout, and perform CRUD (Create, Read, Update, Delete) operations on posts, with the added functionalities of liking and commenting on other users' posts!
    .`,
    img: mern_app,
    id: 1,
    url: "https://sharezone-inky.vercel.app/",
  },
  {
    title: "Task Management App",
    description: `This task management app is built with React, Redux Toolkit, and Redux Thunk. It allows users to manage their tasks, including adding, editing, viewing, and deleting tasks. Additionally, users can log in and log out of the application. The app also provides weather reports relevant to each task.
    `,
    img: task_management,
    id: 2,
    url: "https://task-management-navy.vercel.app/",
  },
  {
    title: "E-cart Website",
    description: `Introducing an innovative e-commerce project developed with React,
    React Router DOM and Context API, offering advanced features such as
    "Add to Cart" and "Add to Wishlist". Leveraging React's
    component-based architecture and React Router DOM for smooth
    navigation, users can effortlessly browse through product listings and
    explore various categories.`,
    img: e_cart_website,
    id: 3,
    url: "https://e-cart-online.vercel.app/",
  },

  {
    title: "Portfolio Website",
    description: `A portfolio website developed with React and Tailwind CSS seamlessly blends the power of React's dynamic frontend framework with Tailwind CSS's utility-first approach to styling. This dynamic duo empowers developers to create sleek, responsive, and visually captivating online portfolios. `,
    img: portfolio_website,
    id: 4,
    url: "https://e-cart-online.vercel.app/",
  },
];
