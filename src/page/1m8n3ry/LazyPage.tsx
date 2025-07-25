import React, { lazy, Suspense } from 'react';

const Page1m8n3ry = lazy(() => import('./Page'));

const LazyPage1m8n3ry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8n3ry />
  </Suspense>
);

export { LazyPage1m8n3ry };
