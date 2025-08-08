import React, { lazy, Suspense } from 'react';

const Page1mkfsfr = lazy(() => import('./Page'));

const LazyPage1mkfsfr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkfsfr />
  </Suspense>
);

export { LazyPage1mkfsfr };
