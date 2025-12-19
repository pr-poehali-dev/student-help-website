import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Помощь студентам РГРТУ
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональная помощь в написании курсовых, дипломных работ и других учебных проектов. 
              Качественно, быстро и с гарантией результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("services")}>
                Посмотреть услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Оставить заявку
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Выполненных работ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных студентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/d120052a-c4d7-476c-97d4-ebd7882449bc/files/508d2f8c-331a-4e9a-a8e3-38249d88c069.jpg" 
              alt="Студенты РГРТУ" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle" size={32} />
                <div>
                  <div className="font-bold text-lg">Гарантия качества</div>
                  <div className="text-sm opacity-90">100% конфиденциально</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
