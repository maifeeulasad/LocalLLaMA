import React, { lazy, Suspense } from 'react';

const Page1md4g25 = lazy(() => import('./Page'));

const LazyPage1md4g25 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md4g25 />
  </Suspense>
);

export { LazyPage1md4g25 };
