import React, { lazy, Suspense } from 'react';

const Page1mei9pu = lazy(() => import('./Page'));

const LazyPage1mei9pu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mei9pu />
  </Suspense>
);

export { LazyPage1mei9pu };
