import React, { lazy, Suspense } from 'react';

const Page1lwwuwq = lazy(() => import('./Page'));

const LazyPage1lwwuwq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwwuwq />
  </Suspense>
);

export { LazyPage1lwwuwq };
