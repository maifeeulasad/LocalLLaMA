import React, { lazy, Suspense } from 'react';

const Page1llms46 = lazy(() => import('./Page'));

const LazyPage1llms46 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llms46 />
  </Suspense>
);

export { LazyPage1llms46 };
