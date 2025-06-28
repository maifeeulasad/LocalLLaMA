import React, { lazy, Suspense } from 'react';

const Page1isu4un = lazy(() => import('./Page'));

const LazyPage1isu4un = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1isu4un />
  </Suspense>
);

export { LazyPage1isu4un };
