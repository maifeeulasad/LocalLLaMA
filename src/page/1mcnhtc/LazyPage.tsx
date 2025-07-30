import React, { lazy, Suspense } from 'react';

const Page1mcnhtc = lazy(() => import('./Page'));

const LazyPage1mcnhtc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcnhtc />
  </Suspense>
);

export { LazyPage1mcnhtc };
