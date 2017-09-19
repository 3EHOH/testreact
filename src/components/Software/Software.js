import React from 'react';
import { Panel } from 'react-bootstrap';

class Software extends React.Component {

  render() {
    return (
      <div>
        <Panel header="Software">
        <p>
        I enjoy working on big data projects that support data scientists. On the server-side, I use technologies as Scala, Postgresql, and Amazon S3, and on the client-side I like JavaScript ES6, Angular, Webpack, Lodash, and many more popular libraries.
        </p>
        <p>
        Toss 'em all in Docker containers, and we're really cooking.
        </p>
        <p>
        I also have experience with Node, React, Meteor, Nginx, and I am dual-certified
        by <a href="https://university.mongodb.com/certified_professional_finder/#name=zenon+evans">
        MongoDB as a developer and database administrator</a>.
        </p>
        <p>
        Besides writing the code, I enjoy communicating with the users of that code, and collaborating with others on how to improve it.
        </p>
        <p>
        You can read more about <a href="https://www.linkedin.com/in/zenon-evans-10b10373">
        my software experience on LinkedIn</a>.
        </p>
        </Panel>
      </div>
    );
  }
}

export default(Software);
