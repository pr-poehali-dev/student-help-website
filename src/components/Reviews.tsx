import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Анна М.",
    rating: 5,
    text: "Отличная работа! Курсовую сдали с первого раза, преподаватель похвалил. Спасибо за оперативность и качество!",
    date: "15.12.2024"
  },
  {
    id: 2,
    name: "Дмитрий К.",
    rating: 5,
    text: "Помогли с дипломом по радиотехнике. Все расчеты верные, оформление по ГОСТу. Защитился на отлично!",
    date: "10.12.2024"
  },
  {
    id: 3,
    name: "Елена С.",
    rating: 4,
    text: "Быстро выполнили контрольную по математике. Одну задачу пришлось переделать, но сделали это оперативно.",
    date: "08.12.2024"
  },
  {
    id: 4,
    name: "Михаил П.",
    rating: 5,
    text: "Заказывал лабораторную по программированию. Код работает идеально, отчет подробный. Рекомендую!",
    date: "05.12.2024"
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !text.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }

    const newReview: Review = {
      id: reviews.length + 1,
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("ru-RU")
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setText("");

    toast({
      title: "Спасибо за отзыв!",
      description: "Ваш отзыв успешно добавлен",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name={i < rating ? "Star" : "Star"}
        size={20}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы студентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Что говорят наши клиенты о работе с нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold">Оставить отзыв</h3>
            <p className="text-muted-foreground">Поделитесь своим опытом работы с нами</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например: Иван И."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Оценка</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Icon
                        name="Star"
                        size={32}
                        className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Расскажите о вашем опыте..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Отправить отзыв
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Reviews;
