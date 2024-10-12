import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import img from "../assists/img.jpg"
import img2 from "../assists/img2.jpg"
import img3 from "../assists/img3.jpg"

export default function AboutPage() {
  const teamMembers = [
    { name: "ALI ALMURTADHA BASHEER JASIM", role: "GENERAL MANAGER", image: img },
    { name: "MOHAMAD MAHMOUD KAYAL", role: "ACCOUNTING MANAGER", image: img2 },
    { name: "HAYDER MANSOOR ABBAS AL ARBAWEE", role: "HUMAN RESOURCES MANAGER", image: img3 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About us</CardTitle>
            <CardDescription className="text-center mt-2">
              Innovating for a better tomorrow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              Welcome to our company! We are a passionate team of professionals dedicated to creating innovative solutions that make a difference in people's lives. Our mission is to benefit from products to solve real-world problems and drive positive change in various industries.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-6">
            We envision a world where the productivity of individuals and companies can reach their full potential. Through our products and services, we aim to streamline complex processes, enhance productivity, and foster creativity across diverse sectors.            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Innovation</Badge>
              <Badge variant="secondary">Integrity</Badge>
              <Badge variant="secondary">Collaboration</Badge>
              <Badge variant="secondary">Excellence</Badge>
              <Badge variant="secondary">Customer-Centric</Badge>
            </div>
            <Separator className="my-6" />
            <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center pt-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold " style={{fontSize:"11px"}}>{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>

                  </CardContent>
                  
                </Card>

              ))}
            
            </div>
            <hr/> 
            <h2 className=" mt-7 text-2xl font-semibold mb-4">connect with us</h2>

<div className="flex flex-wrap gap-2 mb-6">
<Badge variant="secondary">+971 58 583 2200</Badge>
<Badge variant="secondary">+97142505944</Badge>
<Badge variant="secondary">sales@jbalalryah.com</Badge>
<Badge variant="secondary">hr@jbalalryah.com</Badge>
 </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}