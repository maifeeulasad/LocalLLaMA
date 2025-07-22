import React, { lazy, Suspense } from 'react';

const Page1m69m60 = lazy(() => import('./Page'));

const LazyPage1m69m60 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m69m60 />
  </Suspense>
);

export { LazyPage1m69m60 };
