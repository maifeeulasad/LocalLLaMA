import React, { lazy, Suspense } from 'react';

const Page1lylo75 = lazy(() => import('./Page'));

const LazyPage1lylo75 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lylo75 />
  </Suspense>
);

export { LazyPage1lylo75 };
