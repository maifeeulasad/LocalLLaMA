import React, { lazy, Suspense } from 'react';

const Page1mi4emi = lazy(() => import('./Page'));

const LazyPage1mi4emi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi4emi />
  </Suspense>
);

export { LazyPage1mi4emi };
