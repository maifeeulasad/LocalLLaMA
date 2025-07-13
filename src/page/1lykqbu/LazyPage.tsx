import React, { lazy, Suspense } from 'react';

const Page1lykqbu = lazy(() => import('./Page'));

const LazyPage1lykqbu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lykqbu />
  </Suspense>
);

export { LazyPage1lykqbu };
