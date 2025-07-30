import React, { lazy, Suspense } from 'react';

const Page1mcr64f = lazy(() => import('./Page'));

const LazyPage1mcr64f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcr64f />
  </Suspense>
);

export { LazyPage1mcr64f };
