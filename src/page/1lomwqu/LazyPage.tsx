import React, { lazy, Suspense } from 'react';

const Page1lomwqu = lazy(() => import('./Page'));

const LazyPage1lomwqu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lomwqu />
  </Suspense>
);

export { LazyPage1lomwqu };
