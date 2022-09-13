/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Remittance Tracker",
  titleTemplate: "%s | Remittance Tracker",
  defaultTitle: "Remittance Tracker",
  description: "A simple tool to track remittance costs across sources.",
  canonical: "https://remit.blaine.vip",
  openGraph: {
    url: "https://remit.blaine.vip",
    title: "Remittance-Tracker",
    description: "A simple tool to track remittance costs across sources.",
    // images: [
    //   {
    //     url: "https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
    //     alt: "nextarter-tailwind.sznm.dev og-image",
    //   },
    // ],
    site_name: "Remittance-Tracker",
  },
  twitter: {
    handle: "@BlaineSensei",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
