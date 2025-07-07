import React, { lazy, Suspense } from 'react';

const Page1ltkkxd = lazy(() => import('./Page'));

const LazyPage1ltkkxd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltkkxd />
  </Suspense>
);

export { LazyPage1ltkkxd };
