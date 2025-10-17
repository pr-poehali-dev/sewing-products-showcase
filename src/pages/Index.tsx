import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Уютный кардиган',
    description: 'Тёплый кардиган из натуральной шерсти с деревянными пуговицами',
    price: '6 500',
    image: 'https://cdn.poehali.dev/projects/3051c02c-a7ea-4fcf-974e-5e931b98984e/files/3fdb80d7-08d2-4c3c-a4a6-88cd8d06f9ca.jpg'
  },
  {
    id: 2,
    name: 'Вязаная шапка',
    description: 'Стильная шапка с узором косами из мягкой шерсти',
    price: '2 200',
    image: 'https://cdn.poehali.dev/projects/3051c02c-a7ea-4fcf-974e-5e931b98984e/files/36c2956a-72c7-4578-8336-d4435ef21180.jpg'
  },
  {
    id: 3,
    name: 'Объёмный свитер',
    description: 'Оверсайз свитер кремового цвета с рельефной текстурой',
    price: '5 800',
    image: 'https://cdn.poehali.dev/projects/3051c02c-a7ea-4fcf-974e-5e931b98984e/files/6e8c0b23-378a-497b-a445-ee58b7e68c90.jpg'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Мария',
    text: 'Заказала кардиган — влюбилась с первого прикосновения! Невероятно тёплый и мягкий, именно то, что нужно для зимы.',
    rating: 5
  },
  {
    id: 2,
    name: 'Анна',
    text: 'Шапка просто чудо! Сидит идеально, не колется, и выглядит очень стильно. Уже хочу ещё одну в другом цвете.',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена',
    text: 'Свитер превзошёл все ожидания! Качество на высоте, цвет как на фото. Мастер — золотые руки!',
    rating: 5
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream to-warm-beige">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Вязаные истории
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Коллекция', 'О мастере', 'Отзывы', 'Заказать', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-body"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            Тепло ручной работы
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-body">
            Создаю уникальные вязаные изделия с душой и любовью. Каждая вещь — это история тепла и уюта
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 animate-scale-in"
            onClick={() => scrollToSection('коллекция')}
          >
            Посмотреть коллекцию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="коллекция" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Коллекция
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-body">
            Изделия, созданные с заботой о вашем комфорте
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 font-body">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-primary">{product.price} ₽</span>
                    <Button onClick={() => scrollToSection('заказать')}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-мастере" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                О мастере
              </h2>
              <p className="text-lg text-muted-foreground mb-4 font-body leading-relaxed">
                Здравствуйте! Меня зовут Екатерина, и вязание — это моя страсть уже более 10 лет. 
                Каждое изделие я создаю вручную, вкладывая частичку своей души.
              </p>
              <p className="text-lg text-muted-foreground mb-4 font-body leading-relaxed">
                Использую только натуральную пряжу высокого качества: шерсть мериноса, альпаку, кашемир. 
                Все изделия гипоаллергенны и приятны к телу.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground font-body">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground font-body">изделий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground font-body">клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-warm-peach to-warm-pink rounded-3xl opacity-20 absolute inset-0"></div>
              <div className="relative p-8">
                <Icon name="Heart" size={120} className="text-primary/20 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Отзывы
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-body">
            Что говорят мои клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 font-body italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-heading font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="заказать" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Сделать заказ
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-body">
            Заполните форму, и я свяжусь с вами для обсуждения деталей
          </p>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-semibold mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    required
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold mb-2">
                    Контакт для связи
                  </label>
                  <Input 
                    required
                    placeholder="Телефон или email"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold mb-2">
                    Что хотите заказать?
                  </label>
                  <Textarea 
                    required
                    placeholder="Опишите желаемое изделие, размер, цвет..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Контакты
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Телефон</h3>
              <p className="text-muted-foreground font-body">+7 (999) 123-45-67</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
              <p className="text-muted-foreground font-body">knit@example.com</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Telegram</h3>
              <p className="text-muted-foreground font-body">@knitted_stories</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="font-body">© 2024 Вязаные истории. Создано с любовью и теплом 🧶</p>
        </div>
      </footer>
    </div>
  );
}
