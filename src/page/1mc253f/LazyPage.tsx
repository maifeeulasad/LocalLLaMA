import React, { lazy, Suspense } from 'react';

const Page1mc253f = lazy(() => import('./Page'));

const LazyPage1mc253f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc253f />
  </Suspense>
);

export { LazyPage1mc253f };
