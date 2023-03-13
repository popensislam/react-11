import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  reload() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Что-то пошло не так.</h1>
          <button onClick={this.reload}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
