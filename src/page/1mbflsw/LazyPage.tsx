import React, { lazy, Suspense } from 'react';

const Page1mbflsw = lazy(() => import('./Page'));

const LazyPage1mbflsw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbflsw />
  </Suspense>
);

export { LazyPage1mbflsw };
