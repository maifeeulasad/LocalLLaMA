import React, { lazy, Suspense } from 'react';

const Page1m8qtpd = lazy(() => import('./Page'));

const LazyPage1m8qtpd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8qtpd />
  </Suspense>
);

export { LazyPage1m8qtpd };
