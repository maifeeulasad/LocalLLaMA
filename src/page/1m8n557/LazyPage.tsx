import React, { lazy, Suspense } from 'react';

const Page1m8n557 = lazy(() => import('./Page'));

const LazyPage1m8n557 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8n557 />
  </Suspense>
);

export { LazyPage1m8n557 };
