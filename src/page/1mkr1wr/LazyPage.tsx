import React, { lazy, Suspense } from 'react';

const Page1mkr1wr = lazy(() => import('./Page'));

const LazyPage1mkr1wr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkr1wr />
  </Suspense>
);

export { LazyPage1mkr1wr };
