import React, { lazy, Suspense } from 'react';

const Page1mfpgae = lazy(() => import('./Page'));

const LazyPage1mfpgae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfpgae />
  </Suspense>
);

export { LazyPage1mfpgae };
