import React, { lazy, Suspense } from 'react';

const Page1lt8j4u = lazy(() => import('./Page'));

const LazyPage1lt8j4u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt8j4u />
  </Suspense>
);

export { LazyPage1lt8j4u };
