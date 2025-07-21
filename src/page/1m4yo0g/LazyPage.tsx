import React, { lazy, Suspense } from 'react';

const Page1m4yo0g = lazy(() => import('./Page'));

const LazyPage1m4yo0g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4yo0g />
  </Suspense>
);

export { LazyPage1m4yo0g };
