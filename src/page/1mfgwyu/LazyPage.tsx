import React, { lazy, Suspense } from 'react';

const Page1mfgwyu = lazy(() => import('./Page'));

const LazyPage1mfgwyu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfgwyu />
  </Suspense>
);

export { LazyPage1mfgwyu };
