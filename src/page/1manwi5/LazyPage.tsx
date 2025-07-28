import React, { lazy, Suspense } from 'react';

const Page1manwi5 = lazy(() => import('./Page'));

const LazyPage1manwi5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1manwi5 />
  </Suspense>
);

export { LazyPage1manwi5 };
