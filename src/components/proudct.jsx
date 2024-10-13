import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import c1 from "../assists/c1.jpeg"
import c2 from "../assists/c2.jpeg"
import c3 from "../assists/c3.jpeg"
import c4 from "../assists/c4.jpeg"
import c5 from "../assists/c5.jpeg"
import t1 from "../assists/T1.jpeg"
import t2 from "../assists/th.jpeg"
import t3 from "../assists/T3.jpeg"
import t4 from "../assists/t4.jpeg"
import f1 from "../assists/f1.jpg"
import f2 from "../assists/f2.jpeg"
import f3 from "../assists/f3.jpeg"
import f4 from "../assists/f4.jpeg"
import f5 from "../assists/f5.jpeg"
import f6 from "../assists/f6.jpeg"
export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const products = [
    { id: 1, name: "t-shirt1", category: "t-shirt", price: 199.99, image: c1 },
    { id: 2, name: "t-shirt2", category: "t-shirt", price: 59.99, image: c2 },
    { id: 3, name: "t-shirt3", category: "t-shirt", price: 39.99, image: c3 },
    { id: 4, name: "t-shirt4", category: "t-shirt", price: 149.99, image: c4 },
    { id: 5, name: "t-shirt5", category: "t-shirt", price: 299.99, image: c5 },
    { id: 6, name: "perfume1", category: "perfume", price: 29.99, image: t4},
    { id: 7, name: "perfume2", category: "perfume", price: 29.99, image: t3},
    { id: 8, name: "perfume3", category: "perfume", price: 29.99, image: t1},
    { id: 9, name: "perfume4", category: "perfume", price: 29.99, image: t2},
    { id: 10, name: "shoemaker1", category: "shoemaker", price: 29.99, image: f6},
    { id: 11, name: "shoemaker2", category: "shoemaker", price: 29.99, image: f5},
    { id: 12, name: "shoemaker3", category: "shoemaker", price: 29.99, image: f4},
    { id: 13, name: "shoemaker4", category: "shoemaker", price: 29.99, image: f3},
    { id: 14, name: "shoemaker5", category: "shoemaker", price: 29.99, image: f2},
    { id: 15, name: "shoemaker6", category: "shoemaker", price: 29.99, image: f1},


  ]

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || product.category === category)
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            className="max-w-sm"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="max-w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="">All Categories</SelectItem> */}
              <SelectItem value="shoemaker">shoemaker</SelectItem>
              <SelectItem value="t-shirt">t-shirt</SelectItem>
              <SelectItem value="perfume">perfume</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary">{product.category}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <p className="text-2xl font-bold">${product.price.toFixed(2)}</p> */}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}