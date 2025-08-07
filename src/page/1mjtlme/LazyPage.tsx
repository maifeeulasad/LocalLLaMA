import React, { lazy, Suspense } from 'react';

const Page1mjtlme = lazy(() => import('./Page'));

const LazyPage1mjtlme = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjtlme />
  </Suspense>
);

export { LazyPage1mjtlme };
