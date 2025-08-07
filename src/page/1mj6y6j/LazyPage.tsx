import React, { lazy, Suspense } from 'react';

const Page1mj6y6j = lazy(() => import('./Page'));

const LazyPage1mj6y6j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6y6j />
  </Suspense>
);

export { LazyPage1mj6y6j };
