import React, { lazy, Suspense } from 'react';

const Page1lynwk4 = lazy(() => import('./Page'));

const LazyPage1lynwk4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lynwk4 />
  </Suspense>
);

export { LazyPage1lynwk4 };
