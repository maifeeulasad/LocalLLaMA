import React, { lazy, Suspense } from 'react';

const Page1m9gg6j = lazy(() => import('./Page'));

const LazyPage1m9gg6j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9gg6j />
  </Suspense>
);

export { LazyPage1m9gg6j };
