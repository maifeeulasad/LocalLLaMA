import React, { lazy, Suspense } from 'react';

const Page1madt6e = lazy(() => import('./Page'));

const LazyPage1madt6e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1madt6e />
  </Suspense>
);

export { LazyPage1madt6e };
