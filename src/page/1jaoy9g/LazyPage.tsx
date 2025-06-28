import React, { lazy, Suspense } from 'react';

const Page1jaoy9g = lazy(() => import('./Page'));

const LazyPage1jaoy9g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jaoy9g />
  </Suspense>
);

export { LazyPage1jaoy9g };
