import React, { lazy, Suspense } from 'react';

const Page1lyuxj5 = lazy(() => import('./Page'));

const LazyPage1lyuxj5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyuxj5 />
  </Suspense>
);

export { LazyPage1lyuxj5 };
