import React, { lazy, Suspense } from 'react';

const Page1luxkms = lazy(() => import('./Page'));

const LazyPage1luxkms = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luxkms />
  </Suspense>
);

export { LazyPage1luxkms };
