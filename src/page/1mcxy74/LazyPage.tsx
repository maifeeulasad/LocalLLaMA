import React, { lazy, Suspense } from 'react';

const Page1mcxy74 = lazy(() => import('./Page'));

const LazyPage1mcxy74 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcxy74 />
  </Suspense>
);

export { LazyPage1mcxy74 };
