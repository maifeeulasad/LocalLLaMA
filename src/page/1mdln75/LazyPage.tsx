import React, { lazy, Suspense } from 'react';

const Page1mdln75 = lazy(() => import('./Page'));

const LazyPage1mdln75 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdln75 />
  </Suspense>
);

export { LazyPage1mdln75 };
