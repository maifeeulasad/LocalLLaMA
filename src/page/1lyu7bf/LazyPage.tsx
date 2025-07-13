import React, { lazy, Suspense } from 'react';

const Page1lyu7bf = lazy(() => import('./Page'));

const LazyPage1lyu7bf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyu7bf />
  </Suspense>
);

export { LazyPage1lyu7bf };
