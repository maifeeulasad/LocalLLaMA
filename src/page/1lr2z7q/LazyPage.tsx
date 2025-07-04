import React, { lazy, Suspense } from 'react';

const Page1lr2z7q = lazy(() => import('./Page'));

const LazyPage1lr2z7q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr2z7q />
  </Suspense>
);

export { LazyPage1lr2z7q };
