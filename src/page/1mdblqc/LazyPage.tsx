import React, { lazy, Suspense } from 'react';

const Page1mdblqc = lazy(() => import('./Page'));

const LazyPage1mdblqc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdblqc />
  </Suspense>
);

export { LazyPage1mdblqc };
