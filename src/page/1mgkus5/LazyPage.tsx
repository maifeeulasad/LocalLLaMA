import React, { lazy, Suspense } from 'react';

const Page1mgkus5 = lazy(() => import('./Page'));

const LazyPage1mgkus5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgkus5 />
  </Suspense>
);

export { LazyPage1mgkus5 };
