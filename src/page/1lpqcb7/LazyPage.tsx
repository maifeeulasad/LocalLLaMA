import React, { lazy, Suspense } from 'react';

const Page1lpqcb7 = lazy(() => import('./Page'));

const LazyPage1lpqcb7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpqcb7 />
  </Suspense>
);

export { LazyPage1lpqcb7 };
