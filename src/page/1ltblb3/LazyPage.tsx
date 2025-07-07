import React, { lazy, Suspense } from 'react';

const Page1ltblb3 = lazy(() => import('./Page'));

const LazyPage1ltblb3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltblb3 />
  </Suspense>
);

export { LazyPage1ltblb3 };
