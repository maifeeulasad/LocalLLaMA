import React, { lazy, Suspense } from 'react';

const Page1me7xyj = lazy(() => import('./Page'));

const LazyPage1me7xyj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7xyj />
  </Suspense>
);

export { LazyPage1me7xyj };
