import React, { lazy, Suspense } from 'react';

const Page1luybka = lazy(() => import('./Page'));

const LazyPage1luybka = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luybka />
  </Suspense>
);

export { LazyPage1luybka };
