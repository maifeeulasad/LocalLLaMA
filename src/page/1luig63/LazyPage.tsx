import React, { lazy, Suspense } from 'react';

const Page1luig63 = lazy(() => import('./Page'));

const LazyPage1luig63 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luig63 />
  </Suspense>
);

export { LazyPage1luig63 };
