import React, { lazy, Suspense } from 'react';

const Page1ln3pur = lazy(() => import('./Page'));

const LazyPage1ln3pur = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln3pur />
  </Suspense>
);

export { LazyPage1ln3pur };
