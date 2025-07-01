import React, { lazy, Suspense } from 'react';

const Page1lohzzj = lazy(() => import('./Page'));

const LazyPage1lohzzj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lohzzj />
  </Suspense>
);

export { LazyPage1lohzzj };
