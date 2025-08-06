import React, { lazy, Suspense } from 'react';

const Page1miruac = lazy(() => import('./Page'));

const LazyPage1miruac = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miruac />
  </Suspense>
);

export { LazyPage1miruac };
