import React, { lazy, Suspense } from 'react';

const Page1lyqefd = lazy(() => import('./Page'));

const LazyPage1lyqefd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyqefd />
  </Suspense>
);

export { LazyPage1lyqefd };
