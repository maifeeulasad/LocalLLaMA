import React, { lazy, Suspense } from 'react';

const Page1lvnkuk = lazy(() => import('./Page'));

const LazyPage1lvnkuk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvnkuk />
  </Suspense>
);

export { LazyPage1lvnkuk };
