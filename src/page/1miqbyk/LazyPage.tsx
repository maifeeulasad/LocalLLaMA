import React, { lazy, Suspense } from 'react';

const Page1miqbyk = lazy(() => import('./Page'));

const LazyPage1miqbyk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqbyk />
  </Suspense>
);

export { LazyPage1miqbyk };
