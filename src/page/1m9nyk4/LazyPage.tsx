import React, { lazy, Suspense } from 'react';

const Page1m9nyk4 = lazy(() => import('./Page'));

const LazyPage1m9nyk4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9nyk4 />
  </Suspense>
);

export { LazyPage1m9nyk4 };
