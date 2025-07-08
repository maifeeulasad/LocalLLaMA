import React, { lazy, Suspense } from 'react';

const Page1luia44 = lazy(() => import('./Page'));

const LazyPage1luia44 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luia44 />
  </Suspense>
);

export { LazyPage1luia44 };
