import React, { lazy, Suspense } from 'react';

const Page1miiewp = lazy(() => import('./Page'));

const LazyPage1miiewp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miiewp />
  </Suspense>
);

export { LazyPage1miiewp };
