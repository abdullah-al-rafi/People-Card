import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="" />
      <h4>Name: {`${name}`}</h4>
      <h4>Occupation: {`${job}`}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="Developer" />
      <Person img="22" name="Bob" job="Designer">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
        recusandae!
      </Person>
      <Person img="56" name="David" job="Boss" />
      <Person img="24" name="Susy" job="Developer" />
      <Person img="32" name="Dorothy" job="CTO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        tenetur, dolores qui quisquam reprehenderit inventore dolore et
        distinctio quas cupiditate.
      </Person>
      <Person img="28" name="Sam" job="Cook" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
