import React, { lazy, Suspense } from 'react';

const Page1lyen05 = lazy(() => import('./Page'));

const LazyPage1lyen05 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyen05 />
  </Suspense>
);

export { LazyPage1lyen05 };
