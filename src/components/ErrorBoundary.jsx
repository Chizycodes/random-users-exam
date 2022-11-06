import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // static getDerivedStateFromError(error) {
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return <div className='min-h-screen w-screen flex flex-col items-center justify-center font-bold text-xl mr-3'><h2>Oh No! An Error Has Occurred</h2>
        <details>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details></div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;