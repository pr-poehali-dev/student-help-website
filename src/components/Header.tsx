import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">РГРТУ Помощь</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("reviews")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              Связаться
            </Button>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>

        <nav id="mobile-nav" className="hidden md:hidden flex-col gap-4 mt-4 pb-4">
          <button 
            onClick={() => {
              scrollToSection("services");
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }} 
            className="text-foreground hover:text-primary transition-colors text-left"
          >
            Услуги
          </button>
          <button 
            onClick={() => {
              scrollToSection("faq");
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }} 
            className="text-foreground hover:text-primary transition-colors text-left"
          >
            FAQ
          </button>
          <button 
            onClick={() => {
              scrollToSection("reviews");
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }} 
            className="text-foreground hover:text-primary transition-colors text-left"
          >
            Отзывы
          </button>
          <Button 
            onClick={() => {
              scrollToSection("contact");
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }}
            className="w-full"
          >
            Связаться
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
