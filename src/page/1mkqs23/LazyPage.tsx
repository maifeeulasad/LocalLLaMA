import React, { lazy, Suspense } from 'react';

const Page1mkqs23 = lazy(() => import('./Page'));

const LazyPage1mkqs23 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkqs23 />
  </Suspense>
);

export { LazyPage1mkqs23 };
