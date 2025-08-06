import React, { lazy, Suspense } from 'react';

const Page1minmk6 = lazy(() => import('./Page'));

const LazyPage1minmk6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minmk6 />
  </Suspense>
);

export { LazyPage1minmk6 };
