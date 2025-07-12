import React, { lazy, Suspense } from 'react';

const Page1lx4ya7 = lazy(() => import('./Page'));

const LazyPage1lx4ya7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4ya7 />
  </Suspense>
);

export { LazyPage1lx4ya7 };
