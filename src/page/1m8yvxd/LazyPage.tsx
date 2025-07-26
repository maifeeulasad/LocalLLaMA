import React, { lazy, Suspense } from 'react';

const Page1m8yvxd = lazy(() => import('./Page'));

const LazyPage1m8yvxd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8yvxd />
  </Suspense>
);

export { LazyPage1m8yvxd };
