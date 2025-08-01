import React, { lazy, Suspense } from 'react';

const Page1me9qiz = lazy(() => import('./Page'));

const LazyPage1me9qiz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me9qiz />
  </Suspense>
);

export { LazyPage1me9qiz };
