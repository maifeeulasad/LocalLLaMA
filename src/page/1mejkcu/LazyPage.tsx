import React, { lazy, Suspense } from 'react';

const Page1mejkcu = lazy(() => import('./Page'));

const LazyPage1mejkcu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mejkcu />
  </Suspense>
);

export { LazyPage1mejkcu };
