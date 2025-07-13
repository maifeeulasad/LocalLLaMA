import React, { lazy, Suspense } from 'react';

const Page1lykf38 = lazy(() => import('./Page'));

const LazyPage1lykf38 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lykf38 />
  </Suspense>
);

export { LazyPage1lykf38 };
