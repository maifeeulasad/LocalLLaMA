import React, { lazy, Suspense } from 'react';

const Page1mk3lir = lazy(() => import('./Page'));

const LazyPage1mk3lir = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk3lir />
  </Suspense>
);

export { LazyPage1mk3lir };
