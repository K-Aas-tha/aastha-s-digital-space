const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aastha Nayak. Built with passion & caffeine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
