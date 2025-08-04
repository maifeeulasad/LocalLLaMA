import React, { lazy, Suspense } from 'react';

const Page1mglmse = lazy(() => import('./Page'));

const LazyPage1mglmse = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mglmse />
  </Suspense>
);

export { LazyPage1mglmse };
