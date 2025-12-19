import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h3 className="text-xl font-bold">РГРТУ Помощь</h3>
            </div>
            <p className="text-sm opacity-80">
              Профессиональная помощь студентам РГРТУ в выполнении учебных работ любой сложности.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Курсовые работы</li>
              <li>Дипломные работы</li>
              <li>Контрольные работы</li>
              <li>Рефераты и эссе</li>
              <li>Лабораторные работы</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>О нас</li>
              <li>Гарантии</li>
              <li>Оплата</li>
              <li>Отзывы</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                help@rgrtu-student.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                @rgrtu_help
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2024 РГРТУ Помощь. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
