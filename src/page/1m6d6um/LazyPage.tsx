import React, { lazy, Suspense } from 'react';

const Page1m6d6um = lazy(() => import('./Page'));

const LazyPage1m6d6um = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6d6um />
  </Suspense>
);

export { LazyPage1m6d6um };
