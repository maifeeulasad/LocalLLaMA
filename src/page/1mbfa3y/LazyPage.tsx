import React, { lazy, Suspense } from 'react';

const Page1mbfa3y = lazy(() => import('./Page'));

const LazyPage1mbfa3y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbfa3y />
  </Suspense>
);

export { LazyPage1mbfa3y };
