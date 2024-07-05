import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-6">Streamline your business processes with our cutting-edge SaaS solution.</p>
          <Button size="lg">Get Started</Button>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Hero Image" className="mx-auto object-cover w-full h-[300px]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Seamless Integration", icon: <CheckCircle className="h-8 w-8 text-primary" /> },
              { title: "Real-time Analytics", icon: <CheckCircle className="h-8 w-8 text-primary" /> },
              { title: "24/7 Support", icon: <CheckCircle className="h-8 w-8 text-primary" /> },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "John Doe", role: "CEO, TechCorp" },
            { name: "Jane Smith", role: "CTO, InnovateCo" },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg" alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Basic", price: "$9.99" },
              { title: "Pro", price: "$19.99" },
              { title: "Enterprise", price: "$49.99" },
            ].map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
                  <ul className="list-disc list-inside mb-6">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Choose Plan</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 SaaS Startup. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;