import React, { lazy, Suspense } from 'react';

const Page1mi5wk1 = lazy(() => import('./Page'));

const LazyPage1mi5wk1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi5wk1 />
  </Suspense>
);

export { LazyPage1mi5wk1 };
