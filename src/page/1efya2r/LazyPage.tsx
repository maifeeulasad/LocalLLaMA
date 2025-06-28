import React, { lazy, Suspense } from 'react';

const Page1efya2r = lazy(() => import('./Page'));

const LazyPage1efya2r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1efya2r />
  </Suspense>
);

export { LazyPage1efya2r };
