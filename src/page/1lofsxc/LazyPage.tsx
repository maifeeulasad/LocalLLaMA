import React, { lazy, Suspense } from 'react';

const Page1lofsxc = lazy(() => import('./Page'));

const LazyPage1lofsxc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lofsxc />
  </Suspense>
);

export { LazyPage1lofsxc };
