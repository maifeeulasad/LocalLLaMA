import React, { lazy, Suspense } from 'react';

const Page1lxmldq = lazy(() => import('./Page'));

const LazyPage1lxmldq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxmldq />
  </Suspense>
);

export { LazyPage1lxmldq };
