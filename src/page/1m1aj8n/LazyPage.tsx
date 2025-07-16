import React, { lazy, Suspense } from 'react';

const Page1m1aj8n = lazy(() => import('./Page'));

const LazyPage1m1aj8n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1aj8n />
  </Suspense>
);

export { LazyPage1m1aj8n };
