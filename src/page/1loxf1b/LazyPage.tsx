import React, { lazy, Suspense } from 'react';

const Page1loxf1b = lazy(() => import('./Page'));

const LazyPage1loxf1b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loxf1b />
  </Suspense>
);

export { LazyPage1loxf1b };
