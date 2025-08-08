import React, { lazy, Suspense } from 'react';

const Page1mkm1jr = lazy(() => import('./Page'));

const LazyPage1mkm1jr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkm1jr />
  </Suspense>
);

export { LazyPage1mkm1jr };
