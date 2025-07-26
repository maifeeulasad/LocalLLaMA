import React, { lazy, Suspense } from 'react';

const Page1m9rpgf = lazy(() => import('./Page'));

const LazyPage1m9rpgf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9rpgf />
  </Suspense>
);

export { LazyPage1m9rpgf };
