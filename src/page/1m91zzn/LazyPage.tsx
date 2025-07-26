import React, { lazy, Suspense } from 'react';

const Page1m91zzn = lazy(() => import('./Page'));

const LazyPage1m91zzn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m91zzn />
  </Suspense>
);

export { LazyPage1m91zzn };
