Introduction to React Higher Order Component

For adding additional functions to the existing components, 
Higher order components are used. These components are functions of JavaScript. 

Higher order components receive data and return values according to the data which makes them pure functions. Whenever the data input changes, the re-running of higher-order components is done with the new data input. This means that whenever we want to change the return values, we just need to change the data accordingly and the Higher order components need not change.

 Higher-order Components return a new component that is actually wrapped in the original one, which was provided to the function. In this article we will go through multiple examples to understand its working like a simple higher-order component, Text list using React Higher order component, React Higher order component with Loader, Counter using Higher Order Component, Text Display on hover with Higher Order Component.

//react example

import React from 'react';
import { render } from 'react-dom';

const Greet = ({ name }) =><h1>Hi! {name}!</h1>;

function HOC(WrappedComponent) {
return class extends React.Component{
render() {
    return <WrappedComponent {...this.props}/>;
    }
  }
}

constNewComponent = HOC(Greet);
const App = () =>
<div>
<NewComponent name="Murthy" />
</div>;
render(<App />, document.getElementById('root'));
-------------------------------

import React from "react";
import { render } from "react-dom";
constwithCounter = Component =>
class Hoc extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
}
update = type => {
if (type === "Inc") {
this.setState(({ count }) => ({ count: count + 1 }));
} else if (type === "Dec") {
this.setState(({ count }) => ({ count: count - 1 }));
}
};
render() {
return <Component {...this.state} {...this.props} update={this.update} />;
}
};
const Counter = ({ count, update }) => (
<div>
<h1>Simple Counter</h1>
<button onClick={() => update("Inc")}>Increase the Value</button>
{ count }
<button onClick={() => update("Dec")}>Decrease the Value</button>
</div>
);
constCounterExample = withCounter(Counter);
render(<CounterExample />, document.getElementById("root"));

