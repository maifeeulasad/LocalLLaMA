import React, { lazy, Suspense } from 'react';

const Page1mf4zaz = lazy(() => import('./Page'));

const LazyPage1mf4zaz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf4zaz />
  </Suspense>
);

export { LazyPage1mf4zaz };
