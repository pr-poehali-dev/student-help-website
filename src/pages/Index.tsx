import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: 'BookOpen',
    title: 'Курсовые работы',
    description: 'Качественное выполнение курсовых проектов по всем дисциплинам',
    price: 'от 3000 ₽',
  },
  {
    icon: 'FileText',
    title: 'Рефераты и эссе',
    description: 'Подготовка рефератов, эссе и докладов любой сложности',
    price: 'от 800 ₽',
  },
  {
    icon: 'PenTool',
    title: 'Лабораторные работы',
    description: 'Помощь в выполнении лабораторных работ с отчетами',
    price: 'от 500 ₽',
  },
  {
    icon: 'Calculator',
    title: 'Контрольные работы',
    description: 'Решение задач по математике, физике и техническим предметам',
    price: 'от 400 ₽',
  },
  {
    icon: 'GraduationCap',
    title: 'Дипломные работы',
    description: 'Полное сопровождение дипломного проектирования',
    price: 'от 15000 ₽',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Помощь на экзаменах',
    description: 'Консультации и поддержка в онлайн режиме',
    price: 'от 1000 ₽',
  },
];

const faqs = [
  {
    question: 'Как быстро вы выполняете работы?',
    answer:
      'Срок выполнения зависит от сложности и объема работы. Рефераты и контрольные — 1-3 дня, курсовые работы — 5-10 дней, дипломные проекты — от 2 недель. Возможно срочное выполнение за дополнительную плату.',
  },
  {
    question: 'Гарантируете ли вы уникальность работ?',
    answer:
      'Да, все работы проверяются на антиплагиат. Мы гарантируем уникальность текста не менее 70% (в зависимости от требований вуза). При необходимости предоставляем отчет о проверке.',
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer:
      'Мы гарантируем бесплатные доработки работы до момента сдачи. Если работа не соответствует заявленным требованиям по нашей вине, мы вернем деньги или переделаем работу бесплатно.',
  },
  {
    question: 'Как происходит оплата?',
    answer:
      'Оплата производится поэтапно: 50% предоплата при начале работы, оставшиеся 50% после получения готовой работы и проверки. Принимаем оплату через СБП, банковские карты.',
  },
  {
    question: 'Можно ли вносить правки в работу?',
    answer:
      'Да, мы предоставляем бесплатные правки в рамках первоначального задания. Количество правок не ограничено до момента успешной сдачи работы преподавателю.',
  },
  {
    question: 'Конфиденциальны ли наши данные?',
    answer:
      'Абсолютно конфиденциальны. Мы не передаем ваши данные третьим лицам и удаляем всю информацию после завершения сотрудничества по вашему запросу.',
  },
];

const reviews = [
  {
    name: 'Анна К.',
    faculty: 'Факультет радиотехники',
    rating: 5,
    text: 'Помогли с курсовой по схемотехнике. Работа сдана на отлично! Спасибо за оперативность и качество.',
  },
  {
    name: 'Дмитрий М.',
    faculty: 'Факультет компьютерных систем',
    rating: 5,
    text: 'Отличная помощь с лабораторными по программированию. Все задания выполнены правильно, с подробными комментариями.',
  },
  {
    name: 'Екатерина В.',
    faculty: 'Факультет электроники',
    rating: 4,
    text: 'Делали диплом, все прошло хорошо. Небольшие правки были внесены быстро. Рекомендую!',
  },
  {
    name: 'Максим П.',
    faculty: 'Автоматика и управление',
    rating: 5,
    text: 'Спасибо за помощь на экзамене! Консультация была четкой и помогла разобраться в сложных вопросах.',
  },
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">РГРТУ Помощь</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="animate-fade-in space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Помощь студентам РГРТУ
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Профессиональная помощь в выполнении курсовых, дипломных, лабораторных работ и подготовке к экзаменам. Быстро, качественно, с гарантией результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="List" className="mr-2 h-5 w-5" />
                  Прайс-лист
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <img
                src="https://cdn.poehali.dev/projects/d120052a-c4d7-476c-97d4-ebd7882449bc/files/56cd28ff-e2a3-4d2a-8a3f-105b4f69cec8.jpg"
                alt="Студенты РГРТУ"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг для успешной учебы в РГРТУ
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={service.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-sm font-semibold text-primary mt-1">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-24 bg-muted/50">
        <div className="container max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на самые популярные вопросы наших клиентов
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Отзывы студентов</h2>
            <p className="text-muted-foreground text-lg">
              Что говорят наши клиенты о нашей работе
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">{review.faculty}</CardDescription>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container max-w-2xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Оставить заявку</h2>
            <p className="text-muted-foreground text-lg">
              Заполните форму, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email или Telegram</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="example@email.com или @username"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тип работы</Label>
                  <Input
                    id="subject"
                    placeholder="Например: Курсовая по физике"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Описание задания</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите подробнее о вашем задании, сроках и требованиях..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">РГРТУ Помощь</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная помощь студентам РГРТУ с 2020 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Курсовые работы</li>
                <li>Дипломные проекты</li>
                <li>Лабораторные работы</li>
                <li>Рефераты и эссе</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  help@rgrtu.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (123) 456-78-90
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Рязань, РГРТУ
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Mail" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Phone" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Share2" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 РГРТУ Помощь. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
