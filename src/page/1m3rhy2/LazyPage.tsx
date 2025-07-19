import React, { lazy, Suspense } from 'react';

const Page1m3rhy2 = lazy(() => import('./Page'));

const LazyPage1m3rhy2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3rhy2 />
  </Suspense>
);

export { LazyPage1m3rhy2 };
