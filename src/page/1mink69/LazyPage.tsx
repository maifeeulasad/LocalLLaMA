import React, { lazy, Suspense } from 'react';

const Page1mink69 = lazy(() => import('./Page'));

const LazyPage1mink69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mink69 />
  </Suspense>
);

export { LazyPage1mink69 };
