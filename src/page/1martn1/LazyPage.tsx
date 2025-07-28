import React, { lazy, Suspense } from 'react';

const Page1martn1 = lazy(() => import('./Page'));

const LazyPage1martn1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1martn1 />
  </Suspense>
);

export { LazyPage1martn1 };
