import React, { lazy, Suspense } from 'react';

const Page1lo6gc0 = lazy(() => import('./Page'));

const LazyPage1lo6gc0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo6gc0 />
  </Suspense>
);

export { LazyPage1lo6gc0 };
