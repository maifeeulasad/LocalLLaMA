import React, { lazy, Suspense } from 'react';

const Page1me8dgy = lazy(() => import('./Page'));

const LazyPage1me8dgy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me8dgy />
  </Suspense>
);

export { LazyPage1me8dgy };
