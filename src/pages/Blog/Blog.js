import React from "react";
import SinglePost from "./SinglePost";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      qus: "What are the different ways to manage a state in a React application?",
      ans: "-- Web Storage: It is the store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components. Lifted State: The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.",
    },
    {
      id: 2,
      qus: "How does prototypical inheritance work? ",
      ans: "-- JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding. Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities. Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. ",
    },
    {
      id: 3,
      qus: "React vs. Angular vs. Vue? ",
      ans: "--- Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component. According to Angular’s site, Angular applications are modular and have their own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, services and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules and vice-versa. React doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application. Components are larger building blocks of React applications. They let you split the UI into independent and reusable pieces. Conceptually, components are like JavaScript functions. They accept arbitrary inputs, called props, and return React elements describing what should appear on the screen. To be able to deal with state and lifecycle features inside these functions they include a bunch of functions called hooks. The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components. Another interesting matter to take into consideration is: How many ready-to-use components does the framework offer? Angular has lots of official ready-to-use components. In the Angular Material project, you can find a huge amount of components that you can use on your own project. For React and Vue.js, you can find many on Github or Google.  ",
    },
    {
      id: 4,
      qus: "What is a unit test? Why should we write unit tests? ",
      ans: "-- A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book Working Effectively with Legacy Code, author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test. Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-white via-purple-100 to-white">
      <h1 className="text-4xl my-4 underline mb-7 text-center text-sky-700">
        Blog
      </h1>
      <div className="lg:pb-36">
        {blogPosts.map((posts) => (
          <SinglePost posts={posts} key={posts.id}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default Blog;
