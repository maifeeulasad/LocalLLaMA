import React, { lazy, Suspense } from 'react';

const Page1lwm3w0 = lazy(() => import('./Page'));

const LazyPage1lwm3w0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwm3w0 />
  </Suspense>
);

export { LazyPage1lwm3w0 };
