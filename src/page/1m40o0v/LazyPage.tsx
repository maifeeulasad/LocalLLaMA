import React, { lazy, Suspense } from 'react';

const Page1m40o0v = lazy(() => import('./Page'));

const LazyPage1m40o0v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m40o0v />
  </Suspense>
);

export { LazyPage1m40o0v };
