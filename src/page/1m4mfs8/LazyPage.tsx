import React, { lazy, Suspense } from 'react';

const Page1m4mfs8 = lazy(() => import('./Page'));

const LazyPage1m4mfs8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4mfs8 />
  </Suspense>
);

export { LazyPage1m4mfs8 };
