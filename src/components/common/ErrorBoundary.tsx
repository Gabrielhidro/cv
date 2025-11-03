import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-alt to-dark text-white px-4">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Oops! Algo deu errado
            </h2>
            <p className="text-gray-400 mb-6">
              {this.state.error?.message || "Ocorreu um erro inesperado."}
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition-transform duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
