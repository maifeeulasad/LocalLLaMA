import React, { lazy, Suspense } from 'react';

const Page1mekm4p = lazy(() => import('./Page'));

const LazyPage1mekm4p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mekm4p />
  </Suspense>
);

export { LazyPage1mekm4p };
