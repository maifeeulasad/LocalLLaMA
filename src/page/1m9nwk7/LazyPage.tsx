import React, { lazy, Suspense } from 'react';

const Page1m9nwk7 = lazy(() => import('./Page'));

const LazyPage1m9nwk7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9nwk7 />
  </Suspense>
);

export { LazyPage1m9nwk7 };
