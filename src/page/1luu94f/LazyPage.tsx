import React, { lazy, Suspense } from 'react';

const Page1luu94f = lazy(() => import('./Page'));

const LazyPage1luu94f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luu94f />
  </Suspense>
);

export { LazyPage1luu94f };
