import React, { lazy, Suspense } from 'react';

const Page1lwe5y8 = lazy(() => import('./Page'));

const LazyPage1lwe5y8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwe5y8 />
  </Suspense>
);

export { LazyPage1lwe5y8 };
