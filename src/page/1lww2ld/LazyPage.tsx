import React, { lazy, Suspense } from 'react';

const Page1lww2ld = lazy(() => import('./Page'));

const LazyPage1lww2ld = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lww2ld />
  </Suspense>
);

export { LazyPage1lww2ld };
