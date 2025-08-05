import React, { lazy, Suspense } from 'react';

const Page1mho569 = lazy(() => import('./Page'));

const LazyPage1mho569 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mho569 />
  </Suspense>
);

export { LazyPage1mho569 };
