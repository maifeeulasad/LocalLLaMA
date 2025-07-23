import React, { lazy, Suspense } from 'react';

const Page1m6wq77 = lazy(() => import('./Page'));

const LazyPage1m6wq77 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6wq77 />
  </Suspense>
);

export { LazyPage1m6wq77 };
