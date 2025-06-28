import React, { lazy, Suspense } from 'react';

const Page1hwwvuz = lazy(() => import('./Page'));

const LazyPage1hwwvuz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hwwvuz />
  </Suspense>
);

export { LazyPage1hwwvuz };
