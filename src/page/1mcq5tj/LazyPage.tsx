import React, { lazy, Suspense } from 'react';

const Page1mcq5tj = lazy(() => import('./Page'));

const LazyPage1mcq5tj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcq5tj />
  </Suspense>
);

export { LazyPage1mcq5tj };
