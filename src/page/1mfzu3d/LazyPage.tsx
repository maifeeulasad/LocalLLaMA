import React, { lazy, Suspense } from 'react';

const Page1mfzu3d = lazy(() => import('./Page'));

const LazyPage1mfzu3d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfzu3d />
  </Suspense>
);

export { LazyPage1mfzu3d };
