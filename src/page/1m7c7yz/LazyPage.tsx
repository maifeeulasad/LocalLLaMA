import React, { lazy, Suspense } from 'react';

const Page1m7c7yz = lazy(() => import('./Page'));

const LazyPage1m7c7yz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7c7yz />
  </Suspense>
);

export { LazyPage1m7c7yz };
