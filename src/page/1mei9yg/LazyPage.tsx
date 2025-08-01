import React, { lazy, Suspense } from 'react';

const Page1mei9yg = lazy(() => import('./Page'));

const LazyPage1mei9yg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mei9yg />
  </Suspense>
);

export { LazyPage1mei9yg };
