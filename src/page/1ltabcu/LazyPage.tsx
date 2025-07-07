import React, { lazy, Suspense } from 'react';

const Page1ltabcu = lazy(() => import('./Page'));

const LazyPage1ltabcu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltabcu />
  </Suspense>
);

export { LazyPage1ltabcu };
