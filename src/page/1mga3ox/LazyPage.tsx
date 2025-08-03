import React, { lazy, Suspense } from 'react';

const Page1mga3ox = lazy(() => import('./Page'));

const LazyPage1mga3ox = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mga3ox />
  </Suspense>
);

export { LazyPage1mga3ox };
