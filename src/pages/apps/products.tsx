import { useState, useMemo } from "react"
import { Search, Plus, Filter, Edit, MoreHorizontal, Image as ImageIcon, Tag } from "lucide-react"
import { Card, CardContent, CardHeader } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Modal } from "../../components/ui/modal"

interface Product {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: 'Active' | 'Draft' | 'Archived'
  image: string
}

export function ProductsApp() {
  const statusTabs = ['All', 'Active', 'Draft', 'Archived'] as const
  const categories = ['All Categories', 'Electronics', 'Apparel', 'Accessories', 'Home & Garden']

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Active' | 'Draft' | 'Archived'>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories')

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProductId, setEditingProductId] = useState<string | null>(null)
  
  const [newProductName, setNewProductName] = useState('')
  const [newProductSKU, setNewProductSKU] = useState('')
  const [newProductCategory, setNewProductCategory] = useState('Electronics')
  const [newProductPrice, setNewProductPrice] = useState<number>(0)
  const [newProductStock, setNewProductStock] = useState<number>(0)
  const [newProductStatus, setNewProductStatus] = useState<'Active' | 'Draft' | 'Archived'>('Draft')

  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Premium Wireless Headphones', sku: 'AUDIO-001', category: 'Electronics', price: 299.99, stock: 45, status: 'Active', image: '' },
    { id: '2', name: 'Mechanical Keyboard Pro', sku: 'COMP-042', category: 'Electronics', price: 149.50, stock: 8, status: 'Active', image: '' },
    { id: '3', name: 'Ergonomic Office Chair', sku: 'FURN-015', category: 'Home & Garden', price: 199.00, stock: 0, status: 'Archived', image: '' },
    { id: '4', name: 'USB-C Hub Multiport Adapter', sku: 'COMP-050', category: 'Accessories', price: 45.00, stock: 124, status: 'Active', image: '' },
    { id: '5', name: 'Cotton Minimalist T-Shirt', sku: 'APP-012', category: 'Apparel', price: 24.00, stock: 200, status: 'Active', image: '' },
    { id: '6', name: 'Smart Home Hub', sku: 'ELEC-993', category: 'Electronics', price: 129.99, stock: 23, status: 'Draft', image: '' },
    { id: '7', name: 'Leather Messenger Bag', sku: 'ACC-082', category: 'Accessories', price: 89.00, stock: 4, status: 'Active', image: '' },
    { id: '8', name: 'Desk Planter Set', sku: 'HOME-112', category: 'Home & Garden', price: 34.50, stock: 15, status: 'Draft', image: '' },
  ])

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (selectedStatus !== 'All' && p.status !== selectedStatus) return false
      if (selectedCategory !== 'All Categories' && p.category !== selectedCategory) return false
      if (searchQuery && !(p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()))) return false
      return true
    })
  }, [products, selectedStatus, selectedCategory, searchQuery])

  const openAddModal = () => {
    setEditingProductId(null)
    setNewProductName('')
    setNewProductSKU('')
    setNewProductCategory('Electronics')
    setNewProductPrice(0)
    setNewProductStock(0)
    setNewProductStatus('Draft')
    setIsAddModalOpen(true)
  }

  const openEditModal = (product: Product) => {
    setEditingProductId(product.id)
    setNewProductName(product.name)
    setNewProductSKU(product.sku)
    setNewProductCategory(product.category)
    setNewProductPrice(product.price)
    setNewProductStock(product.stock)
    setNewProductStatus(product.status)
    setIsAddModalOpen(true)
  }
  
  const saveProduct = () => {
    if (!newProductName || !newProductSKU) return

    if (editingProductId) {
      setProducts(products.map(p => p.id === editingProductId ? {
        ...p, name: newProductName, sku: newProductSKU, category: newProductCategory, price: newProductPrice, stock: newProductStock, status: newProductStatus
      } : p))
    } else {
      setProducts([{
        id: Math.random().toString(36).substring(2, 9),
        name: newProductName, sku: newProductSKU, category: newProductCategory, price: newProductPrice, stock: newProductStock, status: newProductStatus, image: ''
      }, ...products])
    }
    setIsAddModalOpen(false)
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground mt-1">Manage your store inventory, pricing, and availability.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button onClick={openAddModal}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b">
           <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 border-b pb-1 overflow-x-auto whitespace-nowrap no-scrollbar w-full">
                {statusTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setSelectedStatus(tab)}
                    className={`pb-2 text-sm font-medium transition-colors relative ${selectedStatus === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {tab}
                    {selectedStatus === tab && <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>}
                  </button>
                ))}
             </div>

             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-1">
               <div className="flex items-center w-full gap-2 border rounded-md px-3 bg-muted/30 shadow-sm sm:w-[350px] transition-colors focus-within:ring-1 focus-within:ring-ring">
                 <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                 <input
                   type="text"
                   className="w-full bg-transparent border-0 h-9 text-sm focus:outline-none placeholder:text-muted-foreground"
                   placeholder="Search products by names or SKUs..."
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)}
                 />
               </div>

               <div className="flex gap-2 w-full sm:w-auto">
                 <select
                   onChange={e => setSelectedCategory(e.target.value)}
                   value={selectedCategory}
                   className="h-9 w-full sm:w-auto rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                 >
                   {categories.map(cat => (
                     <option key={cat} value={cat}>{cat}</option>
                   ))}
                 </select>

                 <Button variant="outline" className="h-9 shrink-0 gap-2">
                   <Filter className="h-4 w-4" />
                   <span className="sr-only sm:not-sr-only">More Filters</span>
                 </Button>
               </div>
             </div>
           </div>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden sm:table-cell">Inventory</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center shrink-0 border overflow-hidden relative">
                        <ImageIcon className="h-5 w-5 text-muted-foreground/50" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground hover:underline cursor-pointer">{row.name}</span>
                        <span className="text-[0.8rem] text-muted-foreground flex items-center gap-1">
                          <Tag className="h-3 w-3" /> {row.sku}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Active' ? 'default' : row.status === 'Archived' ? 'secondary' : 'outline' as any}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{row.category}</TableCell>
                  <TableCell className="font-medium">${row.price.toFixed(2)}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                     <div className="flex items-center gap-2">
                       {row.stock === 0 ? (
                         <><span className="flex h-2 w-2 rounded-full bg-destructive"></span><span className="text-sm font-medium text-destructive">Out of stock</span></>
                       ) : row.stock < 10 ? (
                         <><span className="flex h-2 w-2 rounded-full bg-orange-400"></span><span className="text-sm">Low stock ({row.stock})</span></>
                       ) : (
                         <span className="text-sm">{row.stock} in stock</span>
                       )}
                     </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEditModal(row)} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="More">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">No results.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title={editingProductId ? 'Edit Product' : 'Add New Product'}>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Product Name <span className="text-destructive">*</span></label>
            <input
              value={newProductName} onChange={e => setNewProductName(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              placeholder="e.g. Mechanical Keyboard"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">SKU <span className="text-destructive">*</span></label>
              <input
                value={newProductSKU} onChange={e => setNewProductSKU(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
                placeholder="PROD-001"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">Category</label>
              <select
                value={newProductCategory} onChange={e => setNewProductCategory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              >
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Home & Garden">Home & Garden</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">Price ($)</label>
              <input
                type="number" min="0" step="0.01"
                value={newProductPrice} onChange={e => setNewProductPrice(parseFloat(e.target.value))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">Initial Stock qty</label>
              <input
                type="number" min="0"
                value={newProductStock} onChange={e => setNewProductStock(parseInt(e.target.value, 10))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Initial Status</label>
            <select
              value={newProductStatus} onChange={e => setNewProductStatus(e.target.value as any)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
            >
              <option value="Active">Active (Published)</option>
              <option value="Draft">Draft (Hidden)</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex w-full justify-end gap-2">
          <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
          <Button disabled={!newProductName || !newProductSKU} onClick={saveProduct}>
            {editingProductId ? 'Save Changes' : 'Add Product'}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
