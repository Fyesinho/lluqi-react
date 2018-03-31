import React, { Component } from 'react';
import Section from '../../Layout/Section/Section';

import './GetStarted.css';

const steps = [
  {
    name:'Install Global Package',
    npm:'npm install -g create-react-app'
  },
  {
    name:'Create the app',
    npm:'create-react-app app-name'
  },
  {
    name:'Adding a CSS Preprocessor',
    npm:'npm install --save node-sass-chokidar'
  },
  {
    name:'Run parallel scripts',
    npm:'npm install --save npm-run-all'
  }
]

class GetStarted extends Component{
  render(){
    return(
      <Section title="Get Started" className="get-started">
      <ul>
        {steps.map((step, i) => (
          <li key={i}>
            <p>{step.name}</p>
            <code>{step.npm}</code>
          </li>
        ))}
      </ul>
      </Section>
    );
  }
};

export default GetStarted;
