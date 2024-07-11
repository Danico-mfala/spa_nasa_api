declare module './SearchResults' {
  import { ModalProps } from 'react-modal';
  // Define props interface
  interface SearchResultsProps {
    results: {
      title: string,
      url: string,
      explanation: string,
    }[];
    isOpen: boolean;
    onClose: () => void;
  }

  // Export the component's props with proper typing
  export default function SearchResults(props: SearchResultsProps): JSX.Element;
}