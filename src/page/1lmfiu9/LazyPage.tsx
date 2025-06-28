import React, { lazy, Suspense } from 'react';

const Page1lmfiu9 = lazy(() => import('./Page'));

const LazyPage1lmfiu9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmfiu9 />
  </Suspense>
);

export { LazyPage1lmfiu9 };
