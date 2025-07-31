import React, { lazy, Suspense } from 'react';

const Page1mdl999 = lazy(() => import('./Page'));

const LazyPage1mdl999 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdl999 />
  </Suspense>
);

export { LazyPage1mdl999 };
