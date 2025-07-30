import React, { lazy, Suspense } from 'react';

const Page1mcgpno = lazy(() => import('./Page'));

const LazyPage1mcgpno = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcgpno />
  </Suspense>
);

export { LazyPage1mcgpno };
