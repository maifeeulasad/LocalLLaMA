import React, { lazy, Suspense } from 'react';

const Page1mh5v49 = lazy(() => import('./Page'));

const LazyPage1mh5v49 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh5v49 />
  </Suspense>
);

export { LazyPage1mh5v49 };
