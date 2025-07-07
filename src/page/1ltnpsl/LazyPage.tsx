import React, { lazy, Suspense } from 'react';

const Page1ltnpsl = lazy(() => import('./Page'));

const LazyPage1ltnpsl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltnpsl />
  </Suspense>
);

export { LazyPage1ltnpsl };
