import React, { lazy, Suspense } from 'react';

const Page1mbny6o = lazy(() => import('./Page'));

const LazyPage1mbny6o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbny6o />
  </Suspense>
);

export { LazyPage1mbny6o };
