import React, { lazy, Suspense } from 'react';

const Page1m73q8n = lazy(() => import('./Page'));

const LazyPage1m73q8n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m73q8n />
  </Suspense>
);

export { LazyPage1m73q8n };
