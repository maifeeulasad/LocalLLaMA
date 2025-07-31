import React, { lazy, Suspense } from 'react';

const Page1md7g08 = lazy(() => import('./Page'));

const LazyPage1md7g08 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md7g08 />
  </Suspense>
);

export { LazyPage1md7g08 };
