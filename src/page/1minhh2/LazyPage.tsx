import React, { lazy, Suspense } from 'react';

const Page1minhh2 = lazy(() => import('./Page'));

const LazyPage1minhh2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minhh2 />
  </Suspense>
);

export { LazyPage1minhh2 };
