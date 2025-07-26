import React, { lazy, Suspense } from 'react';

const Page1m9p9kg = lazy(() => import('./Page'));

const LazyPage1m9p9kg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9p9kg />
  </Suspense>
);

export { LazyPage1m9p9kg };
