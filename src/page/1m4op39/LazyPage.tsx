import React, { lazy, Suspense } from 'react';

const Page1m4op39 = lazy(() => import('./Page'));

const LazyPage1m4op39 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4op39 />
  </Suspense>
);

export { LazyPage1m4op39 };
