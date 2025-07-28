import React, { lazy, Suspense } from 'react';

const Page1mbaho0 = lazy(() => import('./Page'));

const LazyPage1mbaho0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbaho0 />
  </Suspense>
);

export { LazyPage1mbaho0 };
