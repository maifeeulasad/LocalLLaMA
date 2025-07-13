import React, { lazy, Suspense } from 'react';

const Page1lykpo6 = lazy(() => import('./Page'));

const LazyPage1lykpo6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lykpo6 />
  </Suspense>
);

export { LazyPage1lykpo6 };
