import React, { lazy, Suspense } from 'react';

const Page1lnsgvy = lazy(() => import('./Page'));

const LazyPage1lnsgvy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnsgvy />
  </Suspense>
);

export { LazyPage1lnsgvy };
