import React, { lazy, Suspense } from 'react';

const Page1mdu8p0 = lazy(() => import('./Page'));

const LazyPage1mdu8p0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdu8p0 />
  </Suspense>
);

export { LazyPage1mdu8p0 };
