import Products from '../../src/Product/Products';

export default function page() {
  return (
    <>
      {/* Same Option A type scale fonts (General Sans + Inter) used on the
          homepage, loaded here since this route also uses those font-general/
          font-inter classes. Scoped to this route only. */}
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
      />

      <Products />
    </>
  );
}
