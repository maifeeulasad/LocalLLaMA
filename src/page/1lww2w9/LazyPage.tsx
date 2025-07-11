import React, { lazy, Suspense } from 'react';

const Page1lww2w9 = lazy(() => import('./Page'));

const LazyPage1lww2w9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lww2w9 />
  </Suspense>
);

export { LazyPage1lww2w9 };
