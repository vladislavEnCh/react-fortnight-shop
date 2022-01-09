import React from 'react';
function Footer() {
  return (
    <footer className="page-footer pink accent-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
