import React, { lazy, Suspense } from 'react';

const Page1mje5o0 = lazy(() => import('./Page'));

const LazyPage1mje5o0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mje5o0 />
  </Suspense>
);

export { LazyPage1mje5o0 };
