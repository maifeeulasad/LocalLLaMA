import React, { lazy, Suspense } from 'react';

const Page1mephu7 = lazy(() => import('./Page'));

const LazyPage1mephu7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mephu7 />
  </Suspense>
);

export { LazyPage1mephu7 };
