import React from 'react';
import { Panel } from 'react-bootstrap';

class Art extends React.Component {

  render() {
    return (
      <div>
        <Panel header="Art">
        <p>
        I work with a number of traditional media, including photography, spray
        paint, oil paint, and less traditional ones, like polyurethane foam,
        found objects, and joint compound.
        </p>
        <p>
        Recently, I had the honor of showing some of my work at Campus Gallery
        in Logan Square.
        </p>
        </Panel>
      </div>
    );
  }
}

export default(Art);
