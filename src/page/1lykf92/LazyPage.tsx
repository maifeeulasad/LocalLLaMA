import React, { lazy, Suspense } from 'react';

const Page1lykf92 = lazy(() => import('./Page'));

const LazyPage1lykf92 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lykf92 />
  </Suspense>
);

export { LazyPage1lykf92 };
