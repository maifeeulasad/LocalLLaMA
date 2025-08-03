import React, { lazy, Suspense } from 'react';

const Page1mfxdlg = lazy(() => import('./Page'));

const LazyPage1mfxdlg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfxdlg />
  </Suspense>
);

export { LazyPage1mfxdlg };
