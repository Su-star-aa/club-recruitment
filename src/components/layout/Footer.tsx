// Footer.tsx — 页脚（布局类 · 成员 A）

import { footerInfo } from '@data/index';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">{footerInfo.copyright}</p>
        <p className="footer__motto">{footerInfo.email}</p>
      </div>
    </footer>
  );
}
