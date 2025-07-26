import React, { lazy, Suspense } from 'react';

const Page1m9avmv = lazy(() => import('./Page'));

const LazyPage1m9avmv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9avmv />
  </Suspense>
);

export { LazyPage1m9avmv };
