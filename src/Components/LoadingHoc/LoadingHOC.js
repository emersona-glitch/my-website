import React from 'react';
import './LoadingHOC.css';
import LoadingComponent from './LoadingComponent';

import {

} from '@material-ui/core';

export function LoadingHOC(ComponentToWrap, loadingMessage) {

  function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);
    const setLoadingState = (isComponentLoading) => {
      setIsLoading(isComponentLoading);
    };

    return (
      <>
        {/* conditional render: */}
        { isLoading && <LoadingComponent message={loadingMessage} /> }
        <ComponentToWrap {...props} setIsLoading={setLoadingState} />
      </>
    );
  }

  return HOC;

}

export default LoadingHOC;