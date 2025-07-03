import React, { lazy, Suspense } from 'react';

const Page1lqqx16 = lazy(() => import('./Page'));

const LazyPage1lqqx16 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqqx16 />
  </Suspense>
);

export { LazyPage1lqqx16 };
