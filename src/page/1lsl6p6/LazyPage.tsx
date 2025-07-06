import React, { lazy, Suspense } from 'react';

const Page1lsl6p6 = lazy(() => import('./Page'));

const LazyPage1lsl6p6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsl6p6 />
  </Suspense>
);

export { LazyPage1lsl6p6 };
