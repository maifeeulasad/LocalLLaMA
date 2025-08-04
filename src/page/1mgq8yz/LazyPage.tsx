import React, { lazy, Suspense } from 'react';

const Page1mgq8yz = lazy(() => import('./Page'));

const LazyPage1mgq8yz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgq8yz />
  </Suspense>
);

export { LazyPage1mgq8yz };
