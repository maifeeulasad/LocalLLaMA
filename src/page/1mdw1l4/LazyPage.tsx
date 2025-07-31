import React, { lazy, Suspense } from 'react';

const Page1mdw1l4 = lazy(() => import('./Page'));

const LazyPage1mdw1l4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdw1l4 />
  </Suspense>
);

export { LazyPage1mdw1l4 };
