import React, { lazy, Suspense } from 'react';

const Page1lubunz = lazy(() => import('./Page'));

const LazyPage1lubunz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lubunz />
  </Suspense>
);

export { LazyPage1lubunz };
