import React, { lazy, Suspense } from 'react';

const Page1mcgfnh = lazy(() => import('./Page'));

const LazyPage1mcgfnh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcgfnh />
  </Suspense>
);

export { LazyPage1mcgfnh };
