import React, { lazy, Suspense } from 'react';

const Page1mh5qlh = lazy(() => import('./Page'));

const LazyPage1mh5qlh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh5qlh />
  </Suspense>
);

export { LazyPage1mh5qlh };
