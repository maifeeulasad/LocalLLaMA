import React, { lazy, Suspense } from 'react';

const Page1lnlo69 = lazy(() => import('./Page'));

const LazyPage1lnlo69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnlo69 />
  </Suspense>
);

export { LazyPage1lnlo69 };
