import React, { lazy, Suspense } from 'react';

const Page1mhoaxs = lazy(() => import('./Page'));

const LazyPage1mhoaxs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhoaxs />
  </Suspense>
);

export { LazyPage1mhoaxs };
