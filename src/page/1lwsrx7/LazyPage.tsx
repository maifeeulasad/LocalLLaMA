import React, { lazy, Suspense } from 'react';

const Page1lwsrx7 = lazy(() => import('./Page'));

const LazyPage1lwsrx7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwsrx7 />
  </Suspense>
);

export { LazyPage1lwsrx7 };
