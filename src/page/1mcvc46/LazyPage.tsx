import React, { lazy, Suspense } from 'react';

const Page1mcvc46 = lazy(() => import('./Page'));

const LazyPage1mcvc46 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcvc46 />
  </Suspense>
);

export { LazyPage1mcvc46 };
