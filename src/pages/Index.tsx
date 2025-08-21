import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const leatherProducts = {
  mastrotto: [
    {
      id: 1,
      name: "Mastrotto Classic",
      type: "Наппа Mastrotto",
      application: "Салон автомобиля",
      price: "18 000 ₽/кв.м",
      image: "/img/9b95cf55-a512-4458-95f6-d25aa9aff1b9.jpg",
      features: ["Итальянская кожа", "Премиум качество", "Естественная фактура"]
    },
    {
      id: 2,
      name: "Mastrotto Sport",
      type: "Наппа Mastrotto",
      application: "Спортивные сиденья",
      price: "22 000 ₽/кв.м",
      image: "/img/0ab1b143-aa46-46ae-b870-29e047b7ea8f.jpg",
      features: ["Спортивная отделка", "Износостойкая", "Антискольжение"]
    }
  ],
  arzignano: [
    {
      id: 3,
      name: "Arzignano Luxury",
      type: "Наппа Arzignano",
      application: "Представительский класс",
      price: "25 000 ₽/кв.м",
      image: "/img/d89a86a1-6b23-4910-ac14-d423dcc37cdd.jpg",
      features: ["Элитная кожа", "Ручная выделка", "Роскошный блеск"]
    },
    {
      id: 4,
      name: "Arzignano Classic",
      type: "Наппа Arzignano",
      application: "Классические авто",
      price: "20 000 ₽/кв.м",
      image: "/img/9b95cf55-a512-4458-95f6-d25aa9aff1b9.jpg",
      features: ["Традиционная выделка", "Долговечность", "Благородный вид"]
    }
  ],
  steering: [
    {
      id: 5,
      name: "Steering Premium",
      type: "Наппа рулевая",
      application: "Руль автомобиля",
      price: "15 000 ₽/кв.м",
      image: "/img/0ab1b143-aa46-46ae-b870-29e047b7ea8f.jpg",
      features: ["Антискольжение", "Эргономичная", "Устойчива к износу"]
    },
    {
      id: 6,
      name: "Steering Sport",
      type: "Наппа рулевая",
      application: "Спортивный руль",
      price: "17 000 ₽/кв.м",
      image: "/img/d89a86a1-6b23-4910-ac14-d423dcc37cdd.jpg",
      features: ["Перфорация", "Спортивный хват", "Дышащая структура"]
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-primary" size={28} />
              <span className="text-2xl font-heading font-bold text-primary">Премиум Авто Кожа</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-body">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-body">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-body">О нас</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-body">Контакты</a>
            </div>
            <Button className="font-body">
              <Icon name="Phone" className="mr-2" size={16} />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Премиальная кожа для вашего автомобиля
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Натуральная кожа высочайшего качества для салонов автомобилей. 
                Эксклюзивные материалы от ведущих европейских производителей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-body text-lg px-8">
                  <Icon name="Eye" className="mr-2" size={20} />
                  Посмотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="font-body text-lg px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img 
                src="/img/9b95cf55-a512-4458-95f6-d25aa9aff1b9.jpg" 
                alt="Премиальная кожа для автомобилей"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="font-heading font-bold text-2xl">15+</div>
                <div className="font-body">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Каталог кожи
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Широкий ассортимент натуральной кожи для различных типов автомобилей и стилей интерьера
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto">
                <TabsTrigger value="all" className="font-body">Все товары</TabsTrigger>
                <TabsTrigger value="mastrotto" className="font-body">Наппа Mastrotto</TabsTrigger>
                <TabsTrigger value="arzignano" className="font-body">Наппа Arzignano</TabsTrigger>
                <TabsTrigger value="steering" className="font-body">Наппа рулевая</TabsTrigger>
              </TabsList>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Тип кожи" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nappa">Наппа</SelectItem>
                    <SelectItem value="vintage">Винтаж</SelectItem>
                    <SelectItem value="sport">Спорт</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Применение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salon">Салон автомобиля</SelectItem>
                    <SelectItem value="sport-seats">Спортивные сиденья</SelectItem>
                    <SelectItem value="classic">Классические авто</SelectItem>
                    <SelectItem value="premium">Представительские</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Цена" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">До 15 000 ₽</SelectItem>
                    <SelectItem value="medium">15 000 - 25 000 ₽</SelectItem>
                    <SelectItem value="premium">От 25 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value="all" className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.values(leatherProducts).flat().map((product) => (
                    <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            {product.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="font-heading text-xl mb-2">{product.name}</CardTitle>
                        <p className="text-muted-foreground mb-4 font-body">{product.application}</p>
                        
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" className="text-primary" size={16} />
                              <span className="text-sm font-body">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-heading font-bold text-primary">{product.price}</span>
                          <Button className="font-body">
                            <Icon name="ShoppingCart" className="mr-2" size={16} />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mastrotto" className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leatherProducts.mastrotto.map((product) => (
                    <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            {product.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="font-heading text-xl mb-2">{product.name}</CardTitle>
                        <p className="text-muted-foreground mb-4 font-body">{product.application}</p>
                        
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" className="text-primary" size={16} />
                              <span className="text-sm font-body">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-heading font-bold text-primary">{product.price}</span>
                          <Button className="font-body">
                            <Icon name="ShoppingCart" className="mr-2" size={16} />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="arzignano" className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leatherProducts.arzignano.map((product) => (
                    <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            {product.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="font-heading text-xl mb-2">{product.name}</CardTitle>
                        <p className="text-muted-foreground mb-4 font-body">{product.application}</p>
                        
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" className="text-primary" size={16} />
                              <span className="text-sm font-body">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-heading font-bold text-primary">{product.price}</span>
                          <Button className="font-body">
                            <Icon name="ShoppingCart" className="mr-2" size={16} />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="steering" className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leatherProducts.steering.map((product) => (
                    <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            {product.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="font-heading text-xl mb-2">{product.name}</CardTitle>
                        <p className="text-muted-foreground mb-4 font-body">{product.application}</p>
                        
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" className="text-primary" size={16} />
                              <span className="text-sm font-body">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-heading font-bold text-primary">{product.price}</span>
                          <Button className="font-body">
                            <Icon name="ShoppingCart" className="mr-2" size={16} />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
                О нашей компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                Мы специализируемся на поставках премиальной натуральной кожи для автомобильной индустрии. 
                Более 15 лет опыта работы с ведущими автопроизводителями и тюнинг-ателье.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
                Наша кожа проходит строгий контроль качества и соответствует европейским стандартам. 
                Мы гарантируем долговечность, комфорт и превосходный внешний вид.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground font-body">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground font-body">Выполненных проектов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d89a86a1-6b23-4910-ac14-d423dcc37cdd.jpg" 
                alt="Мастерская по работе с кожей"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Готовы помочь вам выбрать идеальную кожу для вашего автомобиля
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Телефон</h3>
              <p className="text-muted-foreground font-body mb-2">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground font-body">Ежедневно: 9:00 - 21:00</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Email</h3>
              <p className="text-muted-foreground font-body mb-2">info@premium-leather.ru</p>
              <p className="text-muted-foreground font-body">Ответим в течение часа</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Адрес</h3>
              <p className="text-muted-foreground font-body mb-2">Москва, ул. Автомобильная, 15</p>
              <p className="text-muted-foreground font-body">Шоу-рум и склад</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="font-body text-lg px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Crown" className="text-accent" size={24} />
                <span className="text-xl font-heading font-bold">Премиум Авто Кожа</span>
              </div>
              <p className="text-background/70 font-body">
                Лучшая натуральная кожа для вашего автомобиля
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 font-body">
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Гладкая кожа</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Перфорированная</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Винтажная</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Премиум класс</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 font-body">
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Консультация</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Установка</a></li>
                <li><a href="#" className="text-background/70 hover:text-accent transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-3 font-body">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span className="text-background/70">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span className="text-background/70">info@premium-leather.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/70 font-body">© 2024 Премиум Авто Кожа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;