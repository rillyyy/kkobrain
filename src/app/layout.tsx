// index.html 역할

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#000000",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
<html lang="ko">
  <head>
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <meta name="google-site-verification" content="8R3hdkwyAzSTKAqAE00hrP5jBrzy22IApyWWf5SAyKI" />
    <title>카카오 브레인 블로그 - 클론코드</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">{children}</div>
  </body>
</html>

  );
}
