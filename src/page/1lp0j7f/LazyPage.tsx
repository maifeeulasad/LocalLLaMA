import React, { lazy, Suspense } from 'react';

const Page1lp0j7f = lazy(() => import('./Page'));

const LazyPage1lp0j7f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp0j7f />
  </Suspense>
);

export { LazyPage1lp0j7f };
