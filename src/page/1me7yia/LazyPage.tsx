import React, { lazy, Suspense } from 'react';

const Page1me7yia = lazy(() => import('./Page'));

const LazyPage1me7yia = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7yia />
  </Suspense>
);

export { LazyPage1me7yia };
