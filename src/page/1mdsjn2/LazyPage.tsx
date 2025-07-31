import React, { lazy, Suspense } from 'react';

const Page1mdsjn2 = lazy(() => import('./Page'));

const LazyPage1mdsjn2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdsjn2 />
  </Suspense>
);

export { LazyPage1mdsjn2 };
