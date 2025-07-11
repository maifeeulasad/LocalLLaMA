import React, { lazy, Suspense } from 'react';

const Page1lwb5py = lazy(() => import('./Page'));

const LazyPage1lwb5py = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwb5py />
  </Suspense>
);

export { LazyPage1lwb5py };
