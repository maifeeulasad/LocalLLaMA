import React, { lazy, Suspense } from 'react';

const Page1llx4ky = lazy(() => import('./Page'));

const LazyPage1llx4ky = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llx4ky />
  </Suspense>
);

export { LazyPage1llx4ky };
