import React, { lazy, Suspense } from 'react';

const Page1mcemfm = lazy(() => import('./Page'));

const LazyPage1mcemfm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcemfm />
  </Suspense>
);

export { LazyPage1mcemfm };
