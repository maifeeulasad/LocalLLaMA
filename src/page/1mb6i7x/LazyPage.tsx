import React, { lazy, Suspense } from 'react';

const Page1mb6i7x = lazy(() => import('./Page'));

const LazyPage1mb6i7x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb6i7x />
  </Suspense>
);

export { LazyPage1mb6i7x };
