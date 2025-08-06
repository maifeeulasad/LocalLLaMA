import React, { lazy, Suspense } from 'react';

const Page1mim94b = lazy(() => import('./Page'));

const LazyPage1mim94b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mim94b />
  </Suspense>
);

export { LazyPage1mim94b };
