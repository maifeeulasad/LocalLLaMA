import React, { lazy, Suspense } from 'react';

const Page1mc8tks = lazy(() => import('./Page'));

const LazyPage1mc8tks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc8tks />
  </Suspense>
);

export { LazyPage1mc8tks };
