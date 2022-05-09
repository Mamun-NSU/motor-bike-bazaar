import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div class="blog-container w-80">
      <hr />
      <div class="single-blog">
        <h5>Difference between javascript and nodejs?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> Javascript is a
          programming language that can be run on browsers, but Node JS is an
          interpreter or running environment for a JavaScript programming
          language that holds many excesses. We use JavaScript to write scripts
          on a website that makes web pages more dynamic. Mainly, we can only
          run JavaScript on browsers but NodeJS helps us run JS outside the
          browser. JavaScript runs mainly on the client-side. So, it is used in
          the development of the front end. But NodeJs runs on the server-side.
          It helps in the server-side development via the JavaScript. Javascript
          is capable enough to add HTML and play with the DOM but Nodejs does
          not have capability to add HTML tags. JavaScript is the upgraded
          version of ECMA script which is written in C++ and Nodejs is written
          in C, C++ and Javascript. TypedJS, RamdaJS are some very popular JS
          frameworks. ExpressJs is very commonly used NodeJS module.
        </p>
      </div>
      <div class="single-blog">
        <h5>When should you use nodejs and when should you use mongodb?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> NodeJS And MongoDB are
          two different technologies. NodeJS is a JavaScript runtime environment
          but MongoDB is a NoSQL database where we can store data. NodeJs helps
          JavaScript to run outside of server. It's used in server side
          development. Node JS by default follows the Asynchronous pattern. On
          the other hand MongoDB stores a lot of data in JSON format. It
          performance is much faster than any RDBMS. So, when we build a
          website, we can use MongoDB database to store the data or information.
          But connected with this database we need to use NodeJs to run the
          website outside of server.
        </p>
      </div>
      <div class="single-blog">
        <h5>Differences between sql and nosql databases?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> SQL is the programming
          language which is used to interface with relational databases. SQL
          databases are primarily called as Relational Databases (RDBMS), on the
          other hand NoSQL database are primarily called as non-relational or
          distributed. SQL databases are vertically scalable, while NoSQL
          databases are horizontally scalable. SQL databases are table-based,
          while NoSQL databases are document, key-value, graph, or wide-column
          stores. SQL databases have fixed or static or predefined schema, on
          the other hand NoSQL have dynamic schema. SQL databases are
          table-based, while NoSQL databases are document, key-value, graph, or
          wide-column stores. SQL databases are best suited for complex queries
          but NoSQL are not good for complex queries.
        </p>
      </div>
      <div class="single-blog">
        <h5>What is the purpose of jwt and how does it work?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> JSON Web Token (JWT) is
          a standard used to create access tokens for an application. A JWT is a
          mechanism to verify the owner of some JSON data. It’s an encoded,
          URL-safe string that can contain an unlimited amount of data and is
          cryptographically signed. JWT, or JSON Web Token, is an open standard
          used to share security information between two parties with a client
          and a server. <br></br>
          Instead of storing information on the server after authentication, JWT
          creates a JSON web token and encodes, sterilizes, and adds a signature
          with a secret key that cannot be tampered with. This key is then sent
          back to the browser. Each time a request is sent, it verifies and
          sends the response back. JWT also allows us to use the same JSON Web
          Token in multiple servers. So that, we use JWT frequently.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
