import React, { lazy, Suspense } from 'react';

const Page1mhh5g3 = lazy(() => import('./Page'));

const LazyPage1mhh5g3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhh5g3 />
  </Suspense>
);

export { LazyPage1mhh5g3 };
