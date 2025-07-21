import React, { lazy, Suspense } from 'react';

const Page1m4ukgp = lazy(() => import('./Page'));

const LazyPage1m4ukgp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ukgp />
  </Suspense>
);

export { LazyPage1m4ukgp };
