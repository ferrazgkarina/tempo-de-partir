export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Redundant module declarations for 'react/jsx-runtime', 'react',
// 'react-dom/client', 'lucide-react', and 'react-router-dom' have been removed.
// These packages already have proper type definitions which were being
// conflicted with by the 'any' declarations previously present here.
