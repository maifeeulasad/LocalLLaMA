import React, { lazy, Suspense } from 'react';

const Page1luw10n = lazy(() => import('./Page'));

const LazyPage1luw10n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luw10n />
  </Suspense>
);

export { LazyPage1luw10n };
