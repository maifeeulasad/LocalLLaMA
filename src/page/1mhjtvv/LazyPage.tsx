import React, { lazy, Suspense } from 'react';

const Page1mhjtvv = lazy(() => import('./Page'));

const LazyPage1mhjtvv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhjtvv />
  </Suspense>
);

export { LazyPage1mhjtvv };
