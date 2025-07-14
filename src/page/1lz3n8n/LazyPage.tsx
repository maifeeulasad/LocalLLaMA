import React, { lazy, Suspense } from 'react';

const Page1lz3n8n = lazy(() => import('./Page'));

const LazyPage1lz3n8n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz3n8n />
  </Suspense>
);

export { LazyPage1lz3n8n };
