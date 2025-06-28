import React, { lazy, Suspense } from 'react';

const Page1lm76yz = lazy(() => import('./Page'));

const LazyPage1lm76yz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm76yz />
  </Suspense>
);

export { LazyPage1lm76yz };
