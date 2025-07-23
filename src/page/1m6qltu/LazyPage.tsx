import React, { lazy, Suspense } from 'react';

const Page1m6qltu = lazy(() => import('./Page'));

const LazyPage1m6qltu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qltu />
  </Suspense>
);

export { LazyPage1m6qltu };
