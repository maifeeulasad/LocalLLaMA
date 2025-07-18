import React, { lazy, Suspense } from 'react';

const Page1m1xqv1 = lazy(() => import('./Page'));

const LazyPage1m1xqv1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1xqv1 />
  </Suspense>
);

export { LazyPage1m1xqv1 };
