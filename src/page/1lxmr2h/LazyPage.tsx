import React, { lazy, Suspense } from 'react';

const Page1lxmr2h = lazy(() => import('./Page'));

const LazyPage1lxmr2h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxmr2h />
  </Suspense>
);

export { LazyPage1lxmr2h };
