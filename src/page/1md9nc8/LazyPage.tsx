import React, { lazy, Suspense } from 'react';

const Page1md9nc8 = lazy(() => import('./Page'));

const LazyPage1md9nc8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md9nc8 />
  </Suspense>
);

export { LazyPage1md9nc8 };
