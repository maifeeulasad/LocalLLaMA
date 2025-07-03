import React, { lazy, Suspense } from 'react';

const Page1lpvywm = lazy(() => import('./Page'));

const LazyPage1lpvywm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpvywm />
  </Suspense>
);

export { LazyPage1lpvywm };
