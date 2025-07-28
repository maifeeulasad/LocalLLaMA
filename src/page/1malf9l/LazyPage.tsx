import React, { lazy, Suspense } from 'react';

const Page1malf9l = lazy(() => import('./Page'));

const LazyPage1malf9l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1malf9l />
  </Suspense>
);

export { LazyPage1malf9l };
