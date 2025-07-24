import React, { lazy, Suspense } from 'react';

const Page1m79sp9 = lazy(() => import('./Page'));

const LazyPage1m79sp9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m79sp9 />
  </Suspense>
);

export { LazyPage1m79sp9 };
