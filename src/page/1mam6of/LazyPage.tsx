import React, { lazy, Suspense } from 'react';

const Page1mam6of = lazy(() => import('./Page'));

const LazyPage1mam6of = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mam6of />
  </Suspense>
);

export { LazyPage1mam6of };
