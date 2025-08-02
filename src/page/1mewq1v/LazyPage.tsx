import React, { lazy, Suspense } from 'react';

const Page1mewq1v = lazy(() => import('./Page'));

const LazyPage1mewq1v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mewq1v />
  </Suspense>
);

export { LazyPage1mewq1v };
