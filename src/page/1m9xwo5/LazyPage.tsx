import React, { lazy, Suspense } from 'react';

const Page1m9xwo5 = lazy(() => import('./Page'));

const LazyPage1m9xwo5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9xwo5 />
  </Suspense>
);

export { LazyPage1m9xwo5 };
