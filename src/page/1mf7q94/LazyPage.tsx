import React, { lazy, Suspense } from 'react';

const Page1mf7q94 = lazy(() => import('./Page'));

const LazyPage1mf7q94 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7q94 />
  </Suspense>
);

export { LazyPage1mf7q94 };
