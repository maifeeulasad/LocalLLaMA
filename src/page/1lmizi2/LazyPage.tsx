import React, { lazy, Suspense } from 'react';

const Page1lmizi2 = lazy(() => import('./Page'));

const LazyPage1lmizi2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmizi2 />
  </Suspense>
);

export { LazyPage1lmizi2 };
