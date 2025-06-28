import React, { lazy, Suspense } from 'react';

const Page1lmggiz = lazy(() => import('./Page'));

const LazyPage1lmggiz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmggiz />
  </Suspense>
);

export { LazyPage1lmggiz };
