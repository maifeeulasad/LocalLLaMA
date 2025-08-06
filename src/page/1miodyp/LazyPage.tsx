import React, { lazy, Suspense } from 'react';

const Page1miodyp = lazy(() => import('./Page'));

const LazyPage1miodyp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miodyp />
  </Suspense>
);

export { LazyPage1miodyp };
