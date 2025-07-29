import React, { lazy, Suspense } from 'react';

const Page1mc239f = lazy(() => import('./Page'));

const LazyPage1mc239f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc239f />
  </Suspense>
);

export { LazyPage1mc239f };
