import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
import Mix from './mix'
export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
    // Here you would typically handle the subscription logic
  }

  const features = [
    { title: "Easy to Use", description: "Our intuitive interface makes it simple for anyone to get started." },
    { title: "Powerful Analytics", description: "Gain insights with our advanced analytics and reporting tools." },
    { title: "24/7 Support", description: "Our dedicated team is always here to help you succeed." },
    { title: "Secure & Reliable", description: "Your data is safe with our state-of-the-art security measures." },
  ]

  const testimonials = [
    { name: "John Doe", company: "Tech Co", text: "This product has revolutionized our workflow. Highly recommended!" },
    { name: "Jane Smith", company: "Design Inc", text: "The customer support is outstanding. They're always there when you need them." },
    { name: "Mike Johnson", company: "StartUp LLC", text: "We've seen a 50% increase in productivity since implementing this solution." },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4"> JABAL ALRYAH </h1>

          <h3 className="text-3xl  mb-4">Welcome to Our Amazing Product</h3>
          <p className="text-xl mb-8">Revolutionize your workflow with our cutting-edge solution</p>
          <Button size="lg">
            <Link to={"/services"}>Get Started</Link>
          </Button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="italic mb-4">"{testimonial.text}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers today!</p>
          <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm"
              required
            />
            <Button type="submit">Subscribe Now</Button>
          </form>
        </div>
      </section>
      <Mix/>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Amazing Product. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}