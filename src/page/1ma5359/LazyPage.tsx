import React, { lazy, Suspense } from 'react';

const Page1ma5359 = lazy(() => import('./Page'));

const LazyPage1ma5359 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma5359 />
  </Suspense>
);

export { LazyPage1ma5359 };
