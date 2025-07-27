import React, { lazy, Suspense } from 'react';

const Page1majemr = lazy(() => import('./Page'));

const LazyPage1majemr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1majemr />
  </Suspense>
);

export { LazyPage1majemr };
