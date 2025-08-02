import React, { lazy, Suspense } from 'react';

const Page1mfhfg0 = lazy(() => import('./Page'));

const LazyPage1mfhfg0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfhfg0 />
  </Suspense>
);

export { LazyPage1mfhfg0 };
