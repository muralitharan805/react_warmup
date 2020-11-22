import PropTypes from 'prop-types';
import React from 'react'


// As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:


class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {true}</h1>
    );
  }
}

export default Greeting


Greeting.propTypes = {

  name: PropTypes.number.isRequired
};
