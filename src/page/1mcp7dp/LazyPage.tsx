import React, { lazy, Suspense } from 'react';

const Page1mcp7dp = lazy(() => import('./Page'));

const LazyPage1mcp7dp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcp7dp />
  </Suspense>
);

export { LazyPage1mcp7dp };
