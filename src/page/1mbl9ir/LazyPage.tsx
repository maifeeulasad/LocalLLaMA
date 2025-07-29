import React, { lazy, Suspense } from 'react';

const Page1mbl9ir = lazy(() => import('./Page'));

const LazyPage1mbl9ir = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbl9ir />
  </Suspense>
);

export { LazyPage1mbl9ir };
