import React from "react";

const Home = props => {
  return (
    <div className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
      <h1>Frontend Test</h1>
      <h2>WTT-STORE</h2>
      <p>Help build the WTT-Store</p>
      <h3>Goal</h3>
      <p>Build only the "frontend" of a non-server book store.</p>
      <h3>Write rules:</h3>
      <ul>
        <li>React Framework</li>
        <li>Html5 + CSS</li>
      </ul>
      <h3>What we are judging:</h3>
      <ul>
        <li>Good visual presentation and desirable UX concepts</li>
        <li>Programming Logic</li>
        <li>Organization</li>
        <li>Documentation</li>
      </ul>
      <h3>What can I use:</h3>
      <p>All data should be simulated (no server), preferably create a single static file with all data required in the requirements below.</p>
      <h3>How to submit:</h3>
      <p>Fork this repo and implement your solution. Then send us a pull request to this branch with your code.</p>
      <h3>Requirements</h3>
      <ul>
        <li>Login page (username e password) - Does not require any authorization validation.</li>
        <li>List of books available in store (minimum of 20 books that can be based on this link <a href="https://www.casadocodigo.com.br">https://www.casadocodigo.com.br</a>).</li>
        <li>Each exposed book should have an option for more details, when clicking a page of that book's details should be displayed.</li>
        <li>On the details page, display the book price and option to purchase.</li>
        <li>Once the user clicks "buy", the book should be added to the cart and an option to "check out" should be displayed.</li>
        <li>At checkout, display a form to fill in "name, date of birth and email".</li>
        <li>When submitting the form, display message "Your order has been successfully completed" and thank you for purchasing the book, with an option to return to the beginning of the store.</li>
      </ul>
      <p>Good luck!<br />
      We are waiting for you on our team!</p>
    </div>
  );
};

export default Home;
