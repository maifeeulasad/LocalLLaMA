import React, { lazy, Suspense } from 'react';

const Page1ma2j62 = lazy(() => import('./Page'));

const LazyPage1ma2j62 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma2j62 />
  </Suspense>
);

export { LazyPage1ma2j62 };
