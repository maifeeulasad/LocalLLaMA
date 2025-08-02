import React, { lazy, Suspense } from 'react';

const Page1mf7h6k = lazy(() => import('./Page'));

const LazyPage1mf7h6k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7h6k />
  </Suspense>
);

export { LazyPage1mf7h6k };
