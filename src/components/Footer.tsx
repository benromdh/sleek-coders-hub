const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Ahmed Ben Romdhane</span>
        <span className="font-mono text-xs">ML Engineer & Applied AI Researcher</span>
      </div>
    </footer>
  );
};

export default Footer;
