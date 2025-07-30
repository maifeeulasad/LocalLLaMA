import React, { lazy, Suspense } from 'react';

const Page1mcp4lj = lazy(() => import('./Page'));

const LazyPage1mcp4lj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcp4lj />
  </Suspense>
);

export { LazyPage1mcp4lj };
