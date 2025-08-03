import React, { lazy, Suspense } from 'react';

const Page1mfu5ll = lazy(() => import('./Page'));

const LazyPage1mfu5ll = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfu5ll />
  </Suspense>
);

export { LazyPage1mfu5ll };
