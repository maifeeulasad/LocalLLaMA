import React, { lazy, Suspense } from 'react';

const Page1m57iep = lazy(() => import('./Page'));

const LazyPage1m57iep = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m57iep />
  </Suspense>
);

export { LazyPage1m57iep };
