import { type ReactNode, Component, type ErrorInfo } from 'react';
import {
  ErrorText,
  ErrorTitle,
  ErrorWrapper,
  ReloadButton,
} from './ErrorBoundary.styled';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorTitle>Something Went Wrong</ErrorTitle>
          <ErrorText>Try To Refresh The Page.</ErrorText>
          <ReloadButton onClick={this.handleReload}>Refresh</ReloadButton>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
