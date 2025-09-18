"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Membre du Club",
    content: "Rejoindre le Club IMPACT a été une expérience transformatrice. J&apos;ai pu développer mes compétences en photographie et rencontrer des personnes incroyables.",
    rating: 5,
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Mehdi T.",
    role: "Responsable Ateliers",
    content: "En tant qu&apos;animateur, voir l&apos;évolution des membres est extrêmement gratifiant. Leur créativité et leur engagement sont une source d&apos;inspiration.",
    rating: 5,
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Lina M.",
    role: "Nouvelle Membre",
    content: "Je viens de rejoindre le club et je suis déjà impressionnée par l&apos;ambiance bienveillante et la qualité des ateliers. Je recommande vivement !",
    rating: 4,
    avatar: "/avatars/avatar-3.jpg"
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="w-full">
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 border-2 border-orange-200">
                  <AvatarImage src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                  <AvatarFallback className="bg-orange-100 text-orange-600">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={`mobile-${testimonial.id}`} className="w-full flex-shrink-0 px-2">
                <Card className="border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-orange-200">
                        <AvatarImage src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-orange-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-colors',
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
