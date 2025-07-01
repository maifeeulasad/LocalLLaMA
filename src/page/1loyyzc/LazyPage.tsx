import React, { lazy, Suspense } from 'react';

const Page1loyyzc = lazy(() => import('./Page'));

const LazyPage1loyyzc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loyyzc />
  </Suspense>
);

export { LazyPage1loyyzc };
