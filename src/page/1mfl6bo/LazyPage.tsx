import React, { lazy, Suspense } from 'react';

const Page1mfl6bo = lazy(() => import('./Page'));

const LazyPage1mfl6bo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfl6bo />
  </Suspense>
);

export { LazyPage1mfl6bo };
