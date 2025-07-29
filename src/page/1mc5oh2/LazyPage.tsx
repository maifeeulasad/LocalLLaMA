import React, { lazy, Suspense } from 'react';

const Page1mc5oh2 = lazy(() => import('./Page'));

const LazyPage1mc5oh2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc5oh2 />
  </Suspense>
);

export { LazyPage1mc5oh2 };
