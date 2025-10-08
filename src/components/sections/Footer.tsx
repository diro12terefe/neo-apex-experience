export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
                APEX
              </span>
              <span className="text-foreground"> DIGITAL</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">Building tomorrow's digital experiences</p>
          </div>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              About
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} APEX Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
