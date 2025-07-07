import React, { lazy, Suspense } from 'react';

const Page1lts4wd = lazy(() => import('./Page'));

const LazyPage1lts4wd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lts4wd />
  </Suspense>
);

export { LazyPage1lts4wd };
