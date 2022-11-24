import React from "react";
import SinglePost from "./SinglePost";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      qus: "What are the different ways to manage a state in a React application?",
      ans: "--SQL,- which stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication. Fast-forward to today, and SQL is still widely used for querying relational databases, where data is stored in rows and tables that are linked in various ways. NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. The term “NoSQL” was not coined until the early 2000s. It doesn’t mean the systems don’t use SQL, as NoSQL databases do sometimes support some SQL commands. More accurately, “NoSQL” is sometimes defined as “not only SQL.”",
    },
    {
      id: 2,
      qus: "How does prototypical inheritance work? ",
      ans: "--JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.  ",
    },
    {
      id: 3,
      qus: "React vs. Angular vs. Vue? ",
      ans: "---JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code. Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some popular javascript engine using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs Node JS in detail.",
    },
    {
      id: 4,
      qus: "What is a unit test? Why should we write unit tests? ",
      ans: "--NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy. When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.",
    },
  ];
  return (
    <div>
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
