import React, { lazy, Suspense } from 'react';

const Page1lnu4zl = lazy(() => import('./Page'));

const LazyPage1lnu4zl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnu4zl />
  </Suspense>
);

export { LazyPage1lnu4zl };
