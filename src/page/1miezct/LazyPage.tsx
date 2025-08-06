import React, { lazy, Suspense } from 'react';

const Page1miezct = lazy(() => import('./Page'));

const LazyPage1miezct = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miezct />
  </Suspense>
);

export { LazyPage1miezct };
