import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "FileText",
    title: "Курсовые работы",
    description: "Качественные курсовые по всем предметам",
    price: "от 1500₽",
    features: ["Уникальность от 70%", "Срок от 3 дней", "Бесплатные правки"]
  },
  {
    icon: "BookOpen",
    title: "Дипломные работы",
    description: "Полное сопровождение дипломного проекта",
    price: "от 8000₽",
    features: ["Презентация в подарок", "Консультации", "Гарантия защиты"]
  },
  {
    icon: "Calculator",
    title: "Контрольные работы",
    description: "Решение задач и расчетов",
    price: "от 500₽",
    features: ["Быстрое выполнение", "Подробное решение", "Проверка"]
  },
  {
    icon: "ClipboardList",
    title: "Рефераты и эссе",
    description: "Оформление по ГОСТ",
    price: "от 800₽",
    features: ["Список литературы", "Быстро", "Уникальность"]
  },
  {
    icon: "Code",
    title: "Лабораторные работы",
    description: "Программирование и технические дисциплины",
    price: "от 600₽",
    features: ["Рабочий код", "Отчет", "Объяснение"]
  },
  {
    icon: "PenTool",
    title: "Практика и отчеты",
    description: "Отчеты по практике любого типа",
    price: "от 2000₽",
    features: ["Дневник практики", "По ГОСТу", "Быстро"]
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите нужную услугу и оставьте заявку. Мы поможем с любым учебным проектом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" onClick={scrollToContact}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Icon name="Sparkles" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Не нашли нужную услугу?</h3>
                  <p className="opacity-90">Оставьте заявку, и мы обсудим ваш проект индивидуально</p>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={scrollToContact}
              >
                Связаться с нами
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
