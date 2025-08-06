import React, { lazy, Suspense } from 'react';

const Page1mj0e4i = lazy(() => import('./Page'));

const LazyPage1mj0e4i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0e4i />
  </Suspense>
);

export { LazyPage1mj0e4i };
