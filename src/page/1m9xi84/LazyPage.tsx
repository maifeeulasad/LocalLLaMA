import React, { lazy, Suspense } from 'react';

const Page1m9xi84 = lazy(() => import('./Page'));

const LazyPage1m9xi84 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9xi84 />
  </Suspense>
);

export { LazyPage1m9xi84 };
