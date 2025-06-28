import React, { lazy, Suspense } from 'react';

const Page1l3dhjx = lazy(() => import('./Page'));

const LazyPage1l3dhjx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1l3dhjx />
  </Suspense>
);

export { LazyPage1l3dhjx };
