import React, { lazy, Suspense } from 'react';

const Page1mipcgr = lazy(() => import('./Page'));

const LazyPage1mipcgr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mipcgr />
  </Suspense>
);

export { LazyPage1mipcgr };
