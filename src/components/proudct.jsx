import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import img1 from "../assists/shutterstock_64958509.jpg"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const products = [
    { id: 1, name: "Ergonomic Chair", category: "Furniture", price: 199.99, image: img1 },
    { id: 2, name: "Wireless Keyboard", category: "Electronics", price: 59.99, image: img1 },
    { id: 3, name: "LED Desk Lamp", category: "Lighting", price: 39.99, image: img1 },
    { id: 4, name: "Noise-Cancelling Headphones", category: "Electronics", price: 149.99, image: img1 },
    { id: 5, name: "Standing Desk", category: "Furniture", price: 299.99, image: img1 },
    { id: 6, name: "Wireless Mouse", category: "Electronics", price: 29.99, image: img1 },
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
              <SelectItem value="Furniture">Furniture</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Lighting">Lighting</SelectItem>
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