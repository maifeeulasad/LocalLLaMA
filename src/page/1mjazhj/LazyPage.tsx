import React, { lazy, Suspense } from 'react';

const Page1mjazhj = lazy(() => import('./Page'));

const LazyPage1mjazhj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjazhj />
  </Suspense>
);

export { LazyPage1mjazhj };
