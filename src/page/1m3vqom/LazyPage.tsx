import React, { lazy, Suspense } from 'react';

const Page1m3vqom = lazy(() => import('./Page'));

const LazyPage1m3vqom = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3vqom />
  </Suspense>
);

export { LazyPage1m3vqom };
