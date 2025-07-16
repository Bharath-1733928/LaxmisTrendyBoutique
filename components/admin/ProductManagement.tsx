'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Eye, Upload, X, Image as ImageIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  FEATURED_PRODUCTS, 
  SAREES_DATA, 
  KURTIS_DATA, 
  CASUALS_DATA, 
  ACCESSORIES_DATA,
  updateProductInCategory,
  addProductToCategory,
  removeProductFromCategory
} from '@/lib/assets';
import toast from 'react-hot-toast';

// --- INTERFACES AND STATIC DATA ---
interface Product {
  id: number;
  name: string;
  category: string;
  price: string | number;
  originalPrice?: number;
  stock: number;
  status: string;
  image: string;
  description?: string;
  badge?: string;
  sizes?: string[];
  colors?: string[];
  fabric?: string;
  sleeve?: string;
  type?: string;
  material?: string;
  features?: string[];
    rating?: number;
  reviews?: number;
}

// Define the Product interface to ensure type safety for the final output.

// Assume these are imported from your assets file and have mixed data types.
// (Declarations removed to avoid import conflicts)


/**
 * Rewritten function that keeps the original two-step format while fixing the type error.
 */
const getAllProducts = (): Product[] => {
  // A robust helper to handle both string and number prices
  const parsePrice = (priceValue: any): number | undefined => {
    if (typeof priceValue === 'number') return priceValue;
    if (typeof priceValue === 'string') {
      const num = parseInt(priceValue.replace(/[^0-9.-]+/g, ''));
      return isNaN(num) ? undefined : num;
    }
    return undefined;
  };

  // STEP 1: Pre-process FEATURED_PRODUCTS and combine with other data sources.
  const allRawProducts = [
    ...FEATURED_PRODUCTS,
    ...SAREES_DATA,
    ...KURTIS_DATA,
    ...CASUALS_DATA,
    ...ACCESSORIES_DATA,
  ];
  const productMap = new Map<number, Product>();

  // STEP 2: Map the combined data to the final, fully-typed Product object.
  allRawProducts.forEach((p: any) => {
    const price = parsePrice(p.price);
    if (!p.id || price === undefined) {
      return; // Skip invalid products
    }

    // Create the final, clean product object
    const normalizedProduct: Product = {
      id: p.id,
      name: p.name,
      category: p.category,
      price: price, // Directly use the parsed price
      originalPrice: parsePrice(p.originalPrice),
      stock: p.stock ?? Math.floor(Math.random() * 20) + 5,
      status: 'active',
      image: p.image,
      description: p.description || `Beautiful ${p.name.toLowerCase()} perfect for special occasions.`,
      badge: p.badge || '',
      sizes: p.sizes || [],
      colors: p.colors || [],
      fabric: p.fabric || '',
      sleeve: p.sleeve || '',
      type: p.type || '',
      material: p.material || '',
      features: p.features || [],
      rating: p.rating ?? 4.5, // Add default rating
      reviews: p.reviews ?? 150, // Add default reviews
    };
    
    productMap.set(p.id, normalizedProduct);
  });

  // 3. Return the clean array
  return Array.from(productMap.values());
};

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'];
const availableColors = ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple', 'Black', 'White', 'Gold', 'Silver', 'Orange', 'Navy', 'Grey', 'Maroon'];
const availableFeatures = ['Hand Embroidery', 'Machine Embroidery', 'Zari Work', 'Mirror Work', 'Block Print', 'Digital Print', 'Handloom', 'Pure Fabric', 'Comfortable Fit', 'Easy Care', 'Breathable', 'Wrinkle Free'];


// --- PRODUCT FORM COMPONENT (MOVED OUTSIDE) ---
interface ProductFormProps {
  formData: {
    name: string;
    category: string;
    price: string;
    originalPrice: string;
    stock: string;
    description: string;
    image: string;
    badge: string;
    sizes: string[];
    colors: string[];
    fabric: string;
    sleeve: string;
    type: string;
    material: string;
    features: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (field: string, value: string) => void;
  handleImageUrlChange: (url: string) => void;
  handleImageUpload: (file: File) => void;
  handleDrag: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleSizeChange: (size: string, checked: boolean) => void;
  handleColorChange: (color: string, checked: boolean) => void;
  handleFeatureChange: (feature: string, checked: boolean) => void;
  imagePreview: string;
  setImagePreview: (url: string) => void;
  dragActive: boolean;
}

const ProductForm = ({
  formData, handleInputChange, handleSelectChange, handleImageUrlChange,
  handleImageUpload, handleDrag, handleDrop, handleSizeChange, handleColorChange,
  handleFeatureChange, imagePreview, setImagePreview, dragActive
}: ProductFormProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2">
    <div>
      <Label htmlFor="name">Product Name *</Label>
      <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Enter product name" className="mt-1" />
    </div>

    <div>
      <Label htmlFor="category">Category *</Label>
      <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
        <SelectTrigger className="mt-1"><SelectValue placeholder="Select category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="Sarees">Sarees</SelectItem> <SelectItem value="Kurtis">Kurtis</SelectItem> <SelectItem value="Casuals">Casuals</SelectItem> <SelectItem value="Traditional">Traditional</SelectItem> <SelectItem value="Accessories">Accessories</SelectItem> <SelectItem value="Kids Wear">Kids Wear</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div>
      <Label htmlFor="price">Price (₹) *</Label>
      <Input id="price" type="number" value={formData.price} onChange={handleInputChange} placeholder="Enter price" className="mt-1" />
    </div>

    <div>
      <Label htmlFor="originalPrice">Original Price (₹)</Label>
      <Input id="originalPrice" type="number" value={formData.originalPrice} onChange={handleInputChange} placeholder="Enter original price" className="mt-1" />
    </div>

    <div>
      <Label htmlFor="stock">Stock Quantity *</Label>
      <Input id="stock" type="number" value={formData.stock} onChange={handleInputChange} placeholder="Enter stock quantity" className="mt-1" />
    </div>

    <div>
      <Label htmlFor="badge">Badge</Label>
      <Select value={formData.badge} onValueChange={(value) => handleSelectChange('badge', value)}>
        <SelectTrigger className="mt-1"><SelectValue placeholder="Select badge" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No Badge</SelectItem> <SelectItem value="New">New</SelectItem> <SelectItem value="Sale">Sale</SelectItem> <SelectItem value="Featured">Featured</SelectItem> <SelectItem value="Best Seller">Best Seller</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div>
      <Label htmlFor="fabric">Fabric</Label>
      <Input id="fabric" value={formData.fabric} onChange={handleInputChange} placeholder="e.g., Cotton, Silk, Georgette" className="mt-1" />
    </div>

    <div>
      <Label htmlFor="sleeve">Sleeve Type</Label>
      <Select value={formData.sleeve} onValueChange={(value) => handleSelectChange('sleeve', value)}>
        <SelectTrigger className="mt-1"><SelectValue placeholder="Select sleeve type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="none">Not Applicable</SelectItem> <SelectItem value="Full Sleeve">Full Sleeve</SelectItem> <SelectItem value="3/4 Sleeve">3/4 Sleeve</SelectItem> <SelectItem value="Short Sleeve">Short Sleeve</SelectItem> <SelectItem value="Sleeveless">Sleeveless</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="md:col-span-2">
      <Label htmlFor="image">Product Image *</Label>
      <div className="mt-2 space-y-4">
        <div className="flex space-x-2">
          <Input id="image-url" value={formData.image} onChange={(e) => handleImageUrlChange(e.target.value)} placeholder="Enter image URL or drag & drop image below" className="flex-1" />
          <Button type="button" variant="outline" size="sm"><ImageIcon size={16} /></Button>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${dragActive ? 'border-pink-500 bg-pink-50' : 'border-gray-300 hover:border-gray-400'}`}
          onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">Drag and drop an image here, or{' '}
            <label className="text-pink-600 hover:text-pink-700 cursor-pointer font-medium">
              browse
              <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])} />
            </label>
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        {imagePreview && (
          <div className="relative w-32 h-32">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg border" />
            <Button
              type="button" variant="destructive" size="sm"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
              onClick={() => setImagePreview('')}
            ><X size={12} /></Button>
          </div>
        )}
      </div>
    </div>

    <div className="md:col-span-2">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" value={formData.description} onChange={handleInputChange} placeholder="Enter product description" rows={3} className="mt-1" />
    </div>

    <div className="md:col-span-2">
      <Label>Available Sizes</Label>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 mt-2">
        {availableSizes.map((size) => (
          <div key={size} className="flex items-center space-x-2">
            <Checkbox id={`size-${size}`} checked={formData.sizes.includes(size)} onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)} />
            <Label htmlFor={`size-${size}`} className="text-sm font-normal">{size}</Label>
          </div>
        ))}
      </div>
    </div>

    <div className="md:col-span-2">
      <Label>Available Colors</Label>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
        {availableColors.map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <Checkbox id={`color-${color}`} checked={formData.colors.includes(color)} onCheckedChange={(checked) => handleColorChange(color, checked as boolean)} />
            <Label htmlFor={`color-${color}`} className="text-sm font-normal">{color}</Label>
          </div>
        ))}
      </div>
    </div>

    <div className="md:col-span-2">
      <Label>Features</Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
        {availableFeatures.map((feature) => (
          <div key={feature} className="flex items-center space-x-2">
            <Checkbox id={`feature-${feature}`} checked={formData.features.includes(feature)} onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)} />
            <Label htmlFor={`feature-${feature}`} className="text-sm font-normal">{feature}</Label>
          </div>
        ))}
      </div>
    </div>
  </div>
);


// --- MAIN PRODUCT MANAGEMENT COMPONENT ---
export function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  
  const initialFormData = {
    name: '', category: '', price: '', originalPrice: '', stock: '',
    description: '', image: '', badge: 'none', sizes: [] as string[],
    colors: [] as string[], fabric: '', sleeve: 'none', type: '',
    material: '', features: [] as string[]
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => { setProducts(getAllProducts()); }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setImagePreview('');
    setEditingProduct(null);
  }, []);

  const getStatusBadge = (status: string, stock: number) => {
    if (stock === 0) return <Badge variant="destructive">Out of Stock</Badge>;
    if (stock < 5) return <Badge variant="secondary">Low Stock</Badge>;
    return <Badge className="bg-green-100 text-green-800">In Stock</Badge>;
  };
  
  // --- FORM HANDLERS (Consolidated) ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData(prev => ({...prev, image: result}));
      };
      reader.readAsDataURL(file);
    } else {
      toast.error('Please select a valid image file');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleImageUpload(e.dataTransfer.files[0]);
  };

  const handleImageUrlChange = (url: string) => {
    setFormData(prev => ({...prev, image: url}));
    setImagePreview(url);
  };
  
  const handleArrayChange = (field: 'sizes' | 'colors' | 'features', value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field];
      const newArray = checked ? [...currentArray, value] : currentArray.filter(item => item !== value);
      return { ...prev, [field]: newArray };
    });
  };

  const validateForm = () => {
    const requiredFields = { name: 'Product name', category: 'Category', price: 'Valid price', stock: 'Valid stock', image: 'Product image' } as const;
    type RequiredField = keyof typeof requiredFields;
    for (const field of Object.keys(requiredFields) as RequiredField[]) {
      const label = requiredFields[field];
      if (
        !formData[field] ||
        (field === 'price' && +formData.price <= 0) ||
        (field === 'stock' && +formData.stock < 0)
      ) {
        toast.error(`${label} is required`);
        return false;
      }
    }
    return true;
  };

  const handleAddProduct = () => {
    if (!validateForm()) return;
    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id), 0) + 1,
      name: formData.name.trim(),
      category: formData.category,
      price: parseInt(formData.price),
      originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
      stock: parseInt(formData.stock),
      status: 'active',
      image: formData.image,
      description: formData.description.trim() || `Beautiful ${formData.name.toLowerCase()} perfect for special occasions.`,
      badge: formData.badge === 'none' ? '' : formData.badge,
      sizes: formData.sizes,
      colors: formData.colors,
      fabric: formData.fabric.trim(),
      sleeve: formData.sleeve === 'none' ? '' : formData.sleeve,
      type: formData.type.trim(),
      material: formData.material.trim(),
      features: formData.features
    };
    setProducts(prev => [...prev, newProduct]);
    addProductToCategory(newProduct);
    toast.success(`${newProduct.name} added successfully!`);
    resetForm();
    setIsAddModalOpen(false);
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      stock: product.stock.toString(),
      description: product.description || '',
      image: product.image,
      badge: product.badge || 'none',
      sizes: product.sizes || [],
      colors: product.colors || [],
      fabric: product.fabric || '',
      sleeve: product.sleeve || 'none',
      type: product.type || '',
      material: product.material || '',
      features: product.features || []
    });
    setImagePreview(product.image);
  };

  const handleUpdateProduct = () => {
    if (!editingProduct || !validateForm()) return;
    const updatedProduct: Product = {
      ...editingProduct,
      name: formData.name.trim(),
      category: formData.category,
      price: parseInt(formData.price),
      originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
      stock: parseInt(formData.stock),
      description: formData.description.trim(),
      image: formData.image,
      badge: formData.badge === 'none' ? '' : formData.badge,
      sizes: formData.sizes,
      colors: formData.colors,
      fabric: formData.fabric.trim(),
      sleeve: formData.sleeve === 'none' ? '' : formData.sleeve,
      type: formData.type.trim(),
      material: formData.material.trim(),
      features: formData.features
    };
    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    updateProductInCategory(updatedProduct);
    toast.success(`${updatedProduct.name} updated successfully!`);
    resetForm();
  };

  const handleDeleteProduct = (id: number) => {
    const productToDelete = products.find(p => p.id === id);
    if (productToDelete) {
      setProducts(products.filter(p => p.id !== id));
      removeProductFromCategory(productToDelete);
      toast.success(`${productToDelete.name} deleted successfully!`);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Prepare props for the form component
  const formProps = {
    formData,
    handleInputChange,
    handleSelectChange,
    handleImageUrlChange,
    handleImageUpload,
    handleDrag,
    handleDrop,
    handleSizeChange: (size: string, checked: boolean) => handleArrayChange('sizes', size, checked),
    handleColorChange: (color: string, checked: boolean) => handleArrayChange('colors', color, checked),
    handleFeatureChange: (feature: string, checked: boolean) => handleArrayChange('features', feature, checked),
    imagePreview,
    setImagePreview: (url: string) => {
        setImagePreview(url);
        if(!url) setFormData(prev => ({...prev, image: ''}));
    },
    dragActive
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
          <p className="text-gray-600">Manage your product inventory ({products.length} products)</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={(isOpen) => { if (!isOpen) resetForm(); setIsAddModalOpen(isOpen); }}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsAddModalOpen(true)} className="bg-pink-600 hover:bg-pink-700">
              <Plus size={16} className="mr-2" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <DialogHeader><DialogTitle>Add New Product</DialogTitle></DialogHeader>
            <ProductForm {...formProps} />
            <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
              <Button onClick={handleAddProduct} className="bg-pink-600 hover:bg-pink-700">Add Product</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Products ({filteredProducts.length})</CardTitle>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">Stock</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <motion.tr key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-cover bg-center rounded-lg border" style={{ backgroundImage: `url(${product.image})` }} />
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{product.category}</td>
                    <td className="py-4 px-4 font-medium">₹{product.price.toLocaleString()}</td>
                    <td className="py-4 px-4">{product.stock}</td>
                    <td className="py-4 px-4">{getStatusBadge(product.status, product.stock)}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Button size="sm" variant="ghost"><Eye size={16} /></Button>
                        <Button size="sm" variant="ghost" onClick={() => handleEditClick(product)}><Edit size={16} /></Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteProduct(product.id)}><Trash2 size={16} /></Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!editingProduct} onOpenChange={(isOpen) => { if (!isOpen) resetForm(); }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader><DialogTitle>Edit Product: {editingProduct?.name}</DialogTitle></DialogHeader>
          <ProductForm {...formProps} />
          <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
            <Button variant="outline" onClick={resetForm}>Cancel</Button>
            <Button onClick={handleUpdateProduct} className="bg-pink-600 hover:bg-pink-700">Update Product</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}