import React, { lazy, Suspense } from 'react';

const Page1mb7tb7 = lazy(() => import('./Page'));

const LazyPage1mb7tb7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb7tb7 />
  </Suspense>
);

export { LazyPage1mb7tb7 };
