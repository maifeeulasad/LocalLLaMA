import React, { lazy, Suspense } from 'react';

const Page1miqu6b = lazy(() => import('./Page'));

const LazyPage1miqu6b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqu6b />
  </Suspense>
);

export { LazyPage1miqu6b };
