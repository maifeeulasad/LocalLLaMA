import React, { lazy, Suspense } from 'react';

const Page1m9e5hw = lazy(() => import('./Page'));

const LazyPage1m9e5hw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9e5hw />
  </Suspense>
);

export { LazyPage1m9e5hw };
