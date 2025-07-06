import React, { lazy, Suspense } from 'react';

const Page1lrtrmw = lazy(() => import('./Page'));

const LazyPage1lrtrmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrtrmw />
  </Suspense>
);

export { LazyPage1lrtrmw };
