import React, { lazy, Suspense } from 'react';

const Page1ltxiy4 = lazy(() => import('./Page'));

const LazyPage1ltxiy4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltxiy4 />
  </Suspense>
);

export { LazyPage1ltxiy4 };
