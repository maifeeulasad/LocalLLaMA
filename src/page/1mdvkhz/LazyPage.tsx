import React, { lazy, Suspense } from 'react';

const Page1mdvkhz = lazy(() => import('./Page'));

const LazyPage1mdvkhz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdvkhz />
  </Suspense>
);

export { LazyPage1mdvkhz };
