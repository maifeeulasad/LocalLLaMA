import React, { lazy, Suspense } from 'react';

const Page1mae4yz = lazy(() => import('./Page'));

const LazyPage1mae4yz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mae4yz />
  </Suspense>
);

export { LazyPage1mae4yz };
