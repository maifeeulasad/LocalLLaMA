import React, { lazy, Suspense } from 'react';

const Page1miwmii = lazy(() => import('./Page'));

const LazyPage1miwmii = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwmii />
  </Suspense>
);

export { LazyPage1miwmii };
