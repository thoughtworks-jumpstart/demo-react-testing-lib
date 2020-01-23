import React from "react";
import axios from "axios";

class TestingAxios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/posts/1").then(res => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <div data-testid="testing-axios">
        {this.state.post && this.state.post.title}
      </div>
    );
  }
}

export default TestingAxios;
