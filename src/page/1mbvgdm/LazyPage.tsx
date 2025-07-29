import React, { lazy, Suspense } from 'react';

const Page1mbvgdm = lazy(() => import('./Page'));

const LazyPage1mbvgdm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbvgdm />
  </Suspense>
);

export { LazyPage1mbvgdm };
