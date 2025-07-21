import React, { lazy, Suspense } from 'react';

const Page1m4o11y = lazy(() => import('./Page'));

const LazyPage1m4o11y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4o11y />
  </Suspense>
);

export { LazyPage1m4o11y };
