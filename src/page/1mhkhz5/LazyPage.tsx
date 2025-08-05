import React, { lazy, Suspense } from 'react';

const Page1mhkhz5 = lazy(() => import('./Page'));

const LazyPage1mhkhz5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhkhz5 />
  </Suspense>
);

export { LazyPage1mhkhz5 };
