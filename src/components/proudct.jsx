import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import c1 from "../assists/c1.jpg"
import c2 from "../assists/c2.jpg"
import c3 from "../assists/c3.jpg"
import c4 from "../assists/c4.jpg"
import c5 from "../assists/c5.jpg"
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
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [likedProducts, setLikedProducts] = useState({})
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products = [
    { id: 1, name: "Men's Classic White T-Shirt", category: "t-shirt", price: 199.99, image: c1 },
    { id: 2, name: "Men's Basic Black Tee", category: "t-shirt", price: 59.99, image: c2 },
    { id: 3, name: "Men's Striped Summer Tee", category: "t-shirt", price: 39.99, image: c3 },
    { id: 4, name: "Men's Vintage Graphic T-Shirt", category: "t-shirt", price: 149.99, image: c4 },
    { id: 5, name: "Men's Designer Logo T-Shirt", category: "t-shirt", price: 299.99, image: c5 },
    { id: 6, name: "Men's Leather Artisan Shoes", category: "shoemaker", price: 129.99, image: f6 },
    { id: 7, name: "Men's Classic Brown Loafers", category: "shoemaker", price: 99.99, image: f5 },
    { id: 8, name: "Men's Sporty Sneakers", category: "shoemaker", price: 79.99, image: f4 },
    { id: 9, name: "Men's Elegant Dress Shoes", category: "shoemaker", price: 149.99, image: f3 },
    { id: 10, name: "Men's Comfort Sandals", category: "shoemaker", price: 59.99, image: f2 },
    { id: 11, name: "Men's Luxury Leather Boots", category: "shoemaker", price: 199.99, image: f1 },
    { id: 12, name: "Fresh Citrus Perfume", category: "perfume", price: 29.99, image: t4 },
    { id: 13, name: "Ocean Breeze Fragrance", category: "perfume", price: 29.99, image: t3 },
    { id: 14, name: "Lavender Dreams Perfume", category: "perfume", price: 29.99, image: t1 },
    { id: 15, name: "Midnight Musk Perfume", category: "perfume", price: 29.99, image: t2 },
  ]

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || product.category === category)
  )

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id] // Toggle like state for the specific product
    }));
  }

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

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
              <SelectItem value="shoemaker">Shoemaker</SelectItem>
              <SelectItem value="t-shirt">T-Shirt</SelectItem>
              <SelectItem value="perfume">Perfume</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id}>
              <CardHeader>
                <img style={{width:"400px",height:"300px"}} src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary">{product.category}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <p className="text-2xl font-bold">${product.price.toFixed(2)}</p> */}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => openModal(product)}>View Details</Button>
                {likedProducts[product.id] ? (
                  <BsHeartFill fontSize={"30px"} style={{marginRight:"20px"}}  color='red'onClick={() => toggleLike(product.id)} />
                ) : (
                  <BsHeart fontSize={"30px"} style={{marginRight:"20px"}} onClick={() => toggleLike(product.id)} />
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
        )}

        {/* Modal for viewing product details */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <img style={{width:"400px",height:"300px"}} src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="text-xl font-semibold">${selectedProduct.price.toFixed(2)}</p>
              <p className="text-gray-500 mt-2">Category: {selectedProduct.category}</p>
              <Button variant="outline" onClick={closeModal} className="mt-6">Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
