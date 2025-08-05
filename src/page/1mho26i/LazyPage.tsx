import React, { lazy, Suspense } from 'react';

const Page1mho26i = lazy(() => import('./Page'));

const LazyPage1mho26i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mho26i />
  </Suspense>
);

export { LazyPage1mho26i };
