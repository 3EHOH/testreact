import React from 'react';
import { Panel } from 'react-bootstrap';

class Writing extends React.Component {

  render() {
    return (
      <div>
        <Panel header="Writing & Reading">
        <p>
        I have interviewed <a href="http://reason.com/archives/2013/08/01/a-libertarian-future-for-russia">freedom
        fighters</a>, <a href="http://reason.com/archives/2014/10/30/the-isis-war-doesnt-end-with-bullets">war generals</a>,
        and <a href="http://reason.com/archives/2014/07/15/democratic-accountability-in-an-app">
        technologists</a>.
        When I'm curious about a topic, I reach out to the experts.
        </p>
        <p>
        As an undergraduate, I was honored to have UCLA
        <a href="http://international.ucla.edu/cwl/slavicjournal/920"> publish an
        academic paper</a> I wrote about 20th century Russian fiction.
        </p>
        <p>
        Recently, I've dived into French postmodernists, such as Jean Baudrillard
         and Guy DeBord, whose work anticipated a lot of the interesting ethical
         questions we encounter in software today.
         </p>
        </Panel>
      </div>
    );
  }
}

export default(Writing);
