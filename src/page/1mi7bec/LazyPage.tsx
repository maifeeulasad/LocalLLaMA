import React, { lazy, Suspense } from 'react';

const Page1mi7bec = lazy(() => import('./Page'));

const LazyPage1mi7bec = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi7bec />
  </Suspense>
);

export { LazyPage1mi7bec };
