import React, { lazy, Suspense } from 'react';

const Page1m0uoqo = lazy(() => import('./Page'));

const LazyPage1m0uoqo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0uoqo />
  </Suspense>
);

export { LazyPage1m0uoqo };
