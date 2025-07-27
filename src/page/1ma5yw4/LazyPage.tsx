import React, { lazy, Suspense } from 'react';

const Page1ma5yw4 = lazy(() => import('./Page'));

const LazyPage1ma5yw4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma5yw4 />
  </Suspense>
);

export { LazyPage1ma5yw4 };
