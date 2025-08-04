import React, { lazy, Suspense } from 'react';

const Page1mgnq9n = lazy(() => import('./Page'));

const LazyPage1mgnq9n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgnq9n />
  </Suspense>
);

export { LazyPage1mgnq9n };
