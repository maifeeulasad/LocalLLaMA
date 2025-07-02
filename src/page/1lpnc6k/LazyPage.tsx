import React, { lazy, Suspense } from 'react';

const Page1lpnc6k = lazy(() => import('./Page'));

const LazyPage1lpnc6k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpnc6k />
  </Suspense>
);

export { LazyPage1lpnc6k };
