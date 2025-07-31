import React, { lazy, Suspense } from 'react';

const Page1mdfi5e = lazy(() => import('./Page'));

const LazyPage1mdfi5e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdfi5e />
  </Suspense>
);

export { LazyPage1mdfi5e };
