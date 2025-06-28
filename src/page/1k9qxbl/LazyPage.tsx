import React, { lazy, Suspense } from 'react';

const Page1k9qxbl = lazy(() => import('./Page'));

const LazyPage1k9qxbl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1k9qxbl />
  </Suspense>
);

export { LazyPage1k9qxbl };
